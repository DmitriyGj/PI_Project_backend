import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClientModule } from './modules/client.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { 
  MeetingController,
  ClientController
 } from './controllers/index';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true
      
      // type: 'postgres',
      // host: process.env.HEROKU_URL,
      // port: parseInt(<string>process.env.HEROKU_PORT),
      // username: process.env.HEROKU_USER,
      // password: process.env.HEROKU_PASSWORD,
      // database: process.env.HEROKU_DATABASE,
      // autoLoadEntities: true,
      // synchronize: true
    }),
    ClientModule
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
