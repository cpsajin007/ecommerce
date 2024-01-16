import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class UserSignupDto{
    @IsNotEmpty({message:'Name cannot be null'})
    @IsString({message:'Name should be string'})
    name:string
    
    @IsNotEmpty({message:' email cannot be null'})
    @IsEmail({},{message:'Please provide valid email id'})
    email:string
    @IsNotEmpty({message:'password email be null'})
    @MinLength(5,{message:'Password have minimum 5 character'})
    password:string
}