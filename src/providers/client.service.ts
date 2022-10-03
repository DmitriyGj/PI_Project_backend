import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientPostEntity } from ".././models/client/post.entity";
import { ClientPost } from ".././models/client/post.interface";
import { Repository } from "typeorm";
import { from, Observable } from "rxjs";

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientPostEntity)
        private readonly clientPostRepository: Repository<ClientPostEntity>){}
    
    createPost(clientPost: ClientPost): Observable<ClientPost> {
        return from(this.clientPostRepository.save(clientPost));
    }
}