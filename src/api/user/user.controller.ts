import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserDto } from '../../application/dto/user.dto';
import { RegisterUserCommand } from 'src/application/use-cases/user/command/impl/register-user.command';
import { LocalAuthGuard } from 'src/utils/auth/auth.guard';
import { LoginCommand } from '../../application/use-cases/user/command/impl/login.command';

@Controller('user')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('new')
  async registerUser(@Body() user: Partial<UserDto>) {
    return await this.commandBus.execute(new RegisterUserCommand(user));
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth')
  async login(@Request() req) {
    return await this.commandBus.execute(new LoginCommand(req));
  }
}
