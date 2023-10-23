import { CreateAccountHandler } from '../use-cases/account/handler/create-account.handler';
import { CreateCategoryHandler } from '../use-cases/category/handler/create-category.handler';
import { CreateTransactionHandler } from '../use-cases/transaction/handler/create-transaction.handler';
import { CreateTransferHandler } from '../use-cases/transfer/handler/create-transfer.handler';
import { LoginHandler } from '../use-cases/user/command/handler/login.handler';
import { RegisterUserHandler } from '../use-cases/user/command/handler/register-user.handler';

export const CommandHandlers = [
  RegisterUserHandler,
  LoginHandler,
  CreateAccountHandler,
  CreateCategoryHandler,
  CreateTransactionHandler,
  CreateTransferHandler,
];
