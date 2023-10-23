import { LoginHandler } from '../user/command/handler/login.handler';
import { RegisterUserHandler } from '../user/command/handler/register-user.handler';

export const CommandHandlers = [RegisterUserHandler, LoginHandler];
