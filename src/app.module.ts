import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { 
  MeetingController,
  ClientController
 } from './controllers/index';

@Module({
  imports: [],
  controllers: [AppController, MeetingController, ClientController],
  providers: [AppService],
})
export class AppModule {}
