import { Controller, Get, Post, Put, Delete, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    // @UseGuards(JwtAuthGuard)
    @Get('admin')
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUser(@Request() req: any): Promise<any> {
        return req.user;
    }


    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async delete(@Request() req: any): Promise<User> {
        return this.usersService.delete(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async update(@Request() req: any,@Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.update(req.user.id, updateUserDto);
    }
}
