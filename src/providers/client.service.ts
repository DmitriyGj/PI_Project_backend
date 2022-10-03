import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientEntity } from "../models/client/client.entity";
import { Client } from "../models/client/client.interface";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { from, Observable } from "rxjs";

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity) 
        private readonly clientRepository: Repository<ClientEntity>
    ){}
    findAll(): Observable<Client[]> {
        return from(this.clientRepository.find());
    }

    findById(id: number): Observable<Client> {
        return from(this.clientRepository.findOneBy({ id }));
    }
   
    create(client: Client): Observable<Client> {
        return from(this.clientRepository.save(client));
    }

    update(id: number, client: Client): Observable<UpdateResult> {
        return from(this.clientRepository.update(id, client));
    }

    delete(id: number): Observable<DeleteResult> {
        return from(this.clientRepository.delete({id}))
    }
}