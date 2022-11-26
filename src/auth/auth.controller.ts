import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'models/user/user.interface';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }

    @Post('/login')
    login(@Body() user: User): Promise<{token : string}> {
    return this.authService.login(user);
    }

    @Post('/registration')
    registration(@Body() user: User): Promise<{token : string}> {
    return this.authService.registration(user);
    }

}
