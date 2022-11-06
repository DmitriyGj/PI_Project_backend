import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientService } from '../.././providers/client.service';
import { Client } from '../../models/client/client.interface';
import { from, Observable } from "rxjs";
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService){

  }

  @Get('/all')
  findAll(): Observable<Client[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Observable<Client> {
    return this.clientService.findById(id);
  }

  @Post()
  create(@Body() сlient: Client): Observable<Client> {
    return this.clientService.create(сlient);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() сlient: Client): Observable<UpdateResult> {
    return this.clientService.update(id, сlient);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.clientService.delete(id);
  }
}
