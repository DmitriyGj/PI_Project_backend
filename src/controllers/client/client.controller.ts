import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from '../.././providers/client.service';
import { Client } from '../../models/client/client.interface';
import { from, Observable } from "rxjs";

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService){

  }

  @Get()
  findAll(): Observable<Client[]> {
    return this.clientService.findAll();
  }

  @Post()
  create(@Body() сlient: Client): Observable<Client>{
    return this.clientService.create(сlient);
  }
}
