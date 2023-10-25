import { GetAccountHandler } from '../use-cases/account/queries/handler/get-account.handler';
import { GetUserAccountsHandler } from '../use-cases/account/queries/handler/get-user-accounts.handler';
import { GetCategoriesHandler } from '../use-cases/category/queries/handler/get-categories.handler';
import { GetFilteredTransactionsHandler } from '../use-cases/transaction/query/handler/get-filtered-transactions.handler';

export const QueryHandlers = [
  GetAccountHandler,
  GetUserAccountsHandler,
  GetCategoriesHandler,
  GetFilteredTransactionsHandler,
];
