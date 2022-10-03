import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from '../.././providers/client.service';
import { ClientPost } from '../.././models/client/post.interface';
import { from, Observable } from "rxjs";

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService){

  }

  @Get()
  findAll(): string {
    return 'This is CLIENT';
  }

  @Post()
  create(@Body() post: ClientPost): Observable<ClientPost>{
    return this.clientService.createPost(post);
  }
}
