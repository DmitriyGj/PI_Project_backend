import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ClientEntity } from "../models/client/client.entity";
import { ClientService } from ".././providers/client.service";
import { ClientController } from ".././controllers/client/client.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ClientEntity])
    ],
    providers: [
        ClientService
    ],
    controllers: [
        ClientController
    ]
})
export class ClientModule { }