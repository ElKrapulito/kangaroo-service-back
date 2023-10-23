import { Provider } from '@nestjs/common';
import { IUserFactory } from './user/iuser.factory';
import { UserFactory } from './user/user.factory';
import { ITransactionFactory } from './transaction/itransaction.factory';
import { TransactionFactory } from './transaction/transaction.factory';
import { ICategoryFactory } from './category/icategory.factory';
import { CategoryFactory } from './category/category.factory';
import { IAccountFactory } from './account/iaccount.factory';
import { AccountFactory } from './account/account.factory';
import { TransferFactory } from './transfer/transfer.factory';
import { ITransferFactory } from './transfer/itransfer.factory';

export const FactoriesProvider: Provider[] = [
  { provide: IUserFactory, useClass: UserFactory },
  { provide: ITransactionFactory, useClass: TransactionFactory },
  { provide: ICategoryFactory, useClass: CategoryFactory },
  { provide: IAccountFactory, useClass: AccountFactory },
  { provide: ITransferFactory, useClass: TransferFactory },
];
