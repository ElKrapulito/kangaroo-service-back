import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './typeorm/config/user.entity';
import { AccountEntity } from './typeorm/config/account.entity';
import { CategoryEntity } from './typeorm/config/category.entity';
import { TransactionEntity } from './typeorm/config/transaction.entity';
import { TransferEntity } from './typeorm/config/transfer.entity';
import { RepositoriesProvider } from './typeorm/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      AccountEntity,
      CategoryEntity,
      TransactionEntity,
      TransferEntity,
    ]),
  ],
  providers: [...RepositoriesProvider],
  exports: [...RepositoriesProvider],
})
export class InfrastructureModule {}
