import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('login')
    login(@Body() body: LoginUserDto){
        return this.authService.login(body)
    }

    @Post('register')
    register(@Body() body:RegisterUserDto){
        return this.authService.register(body)
    }
}