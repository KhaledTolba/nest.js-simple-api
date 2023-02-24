import * as mongoos from 'mongoose';

export const UserSchema = new mongoos.Schema({
    name: String,
    username: String,
    phone: Number,
    email: String,
    password: String,
});
