import { Provider } from '@nestjs/common/interfaces';
import { IUserRepository } from '../../../domain/repositories/iuser.repository';
import { UserRepository } from './user.repository';
import { IAccountRepository } from '../../../domain/repositories/iaccount.repository';
import { AccountRepository } from './account.repository';
import { ICategoryRepository } from '../../../domain/repositories/icategory.repository';
import { CategoryRepository } from './category.repository';
import { ITransactionRepository } from '../../../domain/repositories/itransaction.repository';
import { TransactionRepository } from './transaction.repository';
import { ITransferRepository } from '../../../domain/repositories/itransfer.repository';
import { TransferRepository } from './transfer.repository';

export const RepositoriesProvider: Provider[] = [
  { provide: IUserRepository, useClass: UserRepository },
  { provide: IAccountRepository, useClass: AccountRepository },
  { provide: ICategoryRepository, useClass: CategoryRepository },
  { provide: ITransactionRepository, useClass: TransactionRepository },
  { provide: ITransferRepository, useClass: TransferRepository },
];
