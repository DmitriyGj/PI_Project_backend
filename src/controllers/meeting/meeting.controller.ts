import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MeetingService } from '../.././providers/meeting.service';
import { Meeting } from '../../models/meeting/meeting.interface';
import { from, Observable } from "rxjs";
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('meeting')
export class MeetingController {
  constructor(private meetingService: MeetingService){

  }

  @Get('/all')
  findAll(): Observable<Meeting[]> {
    return this.meetingService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Observable<Meeting> {
    return this.meetingService.findById(id);
  }

  @Post()
  create(@Body() meeting: Meeting): Observable<Meeting> {
    return this.meetingService.create(meeting);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() meeting: Meeting): Observable<UpdateResult> {
    return this.meetingService.update(id, meeting);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.meetingService.delete(id);
  }
}