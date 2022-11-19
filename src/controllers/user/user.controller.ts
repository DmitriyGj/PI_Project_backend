import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../.././providers/user.service';
import { User } from 'models/user/user.interface';
import { Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }
  
    @Get('/all')
    findAll(): Observable<User[]> {
      return this.userService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id: number): Observable<User> {
      return this.userService.findById(id);
    }
  
    @Post()
    create(@Body() meeting: User): Observable<User> {
      return this.userService.create(meeting);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() meeting: User): Observable<UpdateResult> {
      return this.userService.update(id, meeting);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.userService.delete(id);
    }
}
