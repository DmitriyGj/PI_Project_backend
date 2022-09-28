import { Controller, Get } from '@nestjs/common';

@Controller('meeting')
export class MeetingController {
  @Get()
  findAll(): string {
    return 'This is MEETING';
  }
}