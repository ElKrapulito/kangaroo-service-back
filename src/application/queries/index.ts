import { GetAccountHandler } from '../use-cases/account/queries/handler/get-account.handler';
import { GetUserAccountsHandler } from '../use-cases/account/queries/handler/get-user-accounts.handler';

export const QueryHandlers = [GetAccountHandler, GetUserAccountsHandler];
