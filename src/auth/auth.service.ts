import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { password, username, ...reset } = user;
      return reset;
    }
    return null;
  }

  async login(user: any): Promise<{ access_token: string }> {
    const payload = {
      name: user._doc.name,
      sub: user._doc._id,
      phone: user._doc.phone,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
