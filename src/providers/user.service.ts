import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { UserEntity } from 'models/user/user.entity';
import { User } from 'models/user/user.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) 
        private readonly userRepository: Repository<UserEntity>
    ){}
    findAll(): Observable<User[]> {
        return from(this.userRepository.find());
    }

    findById(id: number): Observable<User> {
        return from(this.userRepository.findOneBy({ id }));
    }
   
    create(meeting: User): Observable<User> {
        return from(this.userRepository.save(meeting));
    }

    update(id: number, meeting: User): Observable<UpdateResult> {
        return from(this.userRepository.update(id, meeting));
    }

    delete(id: number): Observable<DeleteResult> {
        return from(this.userRepository.delete({id}))
    }
}
