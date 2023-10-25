import { TransactionCreatedHandler } from '../use-cases/transaction/events/handler/transaction-created.handler';
import { UserRegisteredHandler } from '../use-cases/user/events/handler/user-registered.handler';

export const EventHandlers = [UserRegisteredHandler, TransactionCreatedHandler];
