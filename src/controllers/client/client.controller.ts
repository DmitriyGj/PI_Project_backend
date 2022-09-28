import { Controller, Get } from '@nestjs/common';

@Controller('client')
export class ClientController {
  @Get()
  findAll(): string {
    return 'This is CLIENT';
  }
}
