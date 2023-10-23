import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ApplicationModule } from '../application/application.module';
import { AccountController } from './account/account.controller';
import { CategoryController } from './category/category.controller';
import { TransactionController } from './transaction/transaction.controller';
import { TransferenceController } from './transference/transference.controller';

@Module({
  imports: [CqrsModule, ApplicationModule],
  controllers: [UserController, AccountController, CategoryController, TransactionController, TransferenceController],
})
export class ApiModule {}
