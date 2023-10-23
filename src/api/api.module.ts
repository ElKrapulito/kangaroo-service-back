import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [CqrsModule, ApplicationModule],
  controllers: [UserController],
})
export class ApiModule {}
