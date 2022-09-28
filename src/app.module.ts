import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { 
  MeetingController,
  ClientController
 } from './controllers/index';

// import { MeetingController } from './controllers/meeting/meeting.controller';
// import { ClientController } from './controllers/client/client.controller';

@Module({
  imports: [],
  controllers: [AppController, MeetingController, ClientController],
  providers: [AppService],
})
export class AppModule {}
