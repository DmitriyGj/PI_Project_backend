import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MeetingEntity } from "../models/meeting/meeting.entity";
import { MeetingService } from ".././providers/meeting.service";
import { MeetingController } from ".././controllers/meeting/meeting.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([MeetingEntity])
    ],
    providers: [
        MeetingService
    ],
    controllers: [
        MeetingController
    ]
})
export class MeetingModule { }