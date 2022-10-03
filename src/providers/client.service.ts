import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientEntity } from "../models/client/client.entity";
import { Client } from "../models/client/client.interface";
import { Repository } from "typeorm";
import { from, Observable } from "rxjs";

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity) 
        private readonly clientRepository: Repository<ClientEntity>
    ){}
    
    create(client: Client): Observable<Client> {
        return from(this.clientRepository.save(client));
    }

    findAll(): Observable<Client[]>{
        return from(this.clientRepository.find());
    }

}