import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../providers/user.service';
import { User } from 'models/user/user.interface';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
        private jwtService: JwtService){
    }

    async login(user: User):  {
    
    }

    async registration(user: User) {
        const userWithSameEmail = await this.userService.findByEmail(user.email);
    
        if (userWithSameEmail) {
            throw new HttpException('User with same email already exist', HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(user.password, 'salt');
        const newUser = this.userService.create({...user, password: hashPassword});
        return this.generateToken(newUser);
    }

    generateToken(user : User) {
        const payload = {email: user.email, id: user.id}

        return {
            token: this.jwtService.sign(payload)
        }
    }

    validateUser(user: User) {
        const userWithSameEmail = this.userService.findByEmail(user.email);
        const compareResult = bcrypt.compare(user.password, userWithSameEmail.password);
    
        if (userWithSameEmail && compareResult) {
            return userWithSameEmail;
        }

        throw new UnauthorizedException({message: 'Uncorrect email or password'});
    }
}
