import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientPostEntity } from ".././models/client/post.entity";
import { ClientService } from ".././providers/client.service";
import { ClientController } from ".././controllers/client/client.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ClientPostEntity])
    ],
    providers: [
        ClientService
    ],
    controllers: [
        ClientController
    ]
})
export class ClientModule {

}