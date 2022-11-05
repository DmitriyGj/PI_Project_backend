import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
const Config = ConfigModule.forRoot({ isGlobal: true,  envFilePath: '.development.env', })

const DataBaseModule = TypeOrmModule.forRoot({
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
  })

export { Config, DataBaseModule }