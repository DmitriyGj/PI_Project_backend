import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MeetingEntity } from "../models/meeting/meeting.entity";
import { Meeting } from "../models/meeting/meeting.interface";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { from, Observable } from "rxjs";

@Injectable()
export class MeetingService {
    constructor(
        @InjectRepository(MeetingEntity) 
        private readonly meetingRepository: Repository<MeetingEntity>
    ){}
    findAll(): Observable<Meeting[]> {
        return from(this.meetingRepository.find());
    }

    findById(id: number): Observable<Meeting> {
        return from(this.meetingRepository.findOneBy({ id }));
    }
   
    create(meeting: Meeting): Observable<Meeting> {
        return from(this.meetingRepository.save(meeting));
    }

    update(id: number, meeting: Meeting): Observable<UpdateResult> {
        return from(this.meetingRepository.update(id, meeting));
    }

    delete(id: number): Observable<DeleteResult> {
        return from(this.meetingRepository.delete({id}))
    }
}