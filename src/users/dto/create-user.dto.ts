import { IsNotEmpty, IsString, IsEmail, IsOptional } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    readonly name: string;
    
    @IsString()
    @IsNotEmpty()
    readonly username: string;
    
    @IsOptional()
    readonly phone: string;
    
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    
    @IsNotEmpty()
    readonly password: string;
}
