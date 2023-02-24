import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }
    async findOne(username: string): Promise<User> {
        return await this.userModel.findOne({ username: username });
    }
    async create(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }
    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndRemove({ _id: id });
    }
    async update(id: string, user: User): Promise<any> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }
}