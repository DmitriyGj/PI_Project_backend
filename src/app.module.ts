import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClientModule } from './modules/client.module';
import { MeetingModule } from './modules/meeting.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from './config/database.module';
// import { Config, DataBaseModule } from './config/database.module'

import { 
  MeetingController,
  ClientController
 } from './controllers/index';
import { AuthModule } from './auth/auth.module';
import { UserService } from './providers/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    ClientModule,
    MeetingModule,
    AuthModule,
    UserModule
  ],
  controllers: [
    AppController,
    UserController, 
  ],
  providers: [
    AppService,
    UserService
  ],
})
export class AppModule {}
