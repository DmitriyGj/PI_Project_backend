import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClientModule } from './modules/client.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from './config/database.module';
// import { Config, DataBaseModule } from './config/database.module'

import { 
  MeetingController,
  ClientController
 } from './controllers/index';

@Module({
  imports: [
    DatabaseModule,
    ClientModule,
  ],
  controllers: [
    AppController, 
    MeetingController, 
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
