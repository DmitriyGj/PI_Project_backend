import { Injectable } from '@nestjs/common';
import { UserService } from '../providers/user.service';
import { User } from 'models/user/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private userService: UserService){
    }

    login(user: User): Observable<User> {
    
    }

    registration(user: User): Observable<User> {
    
    }
}
