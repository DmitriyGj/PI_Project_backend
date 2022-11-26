import { UserController } from '@controllers/user/user.controller';
import { Module } from '@nestjs/common';
import { UserService } from '../providers/user.service';

@Module({
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {
}
