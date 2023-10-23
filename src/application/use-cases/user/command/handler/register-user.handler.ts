import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { RegisterUserCommand } from '../impl/register-user.command';
import { IUserRepository } from '../../../../../domain/repositories/iuser.repository';
import { Inject } from '@nestjs/common';
import { IUserFactory } from '../../../../../domain/factories/user/iuser.factory';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler
  implements ICommandHandler<RegisterUserCommand>
{
  constructor(
    @Inject(IUserRepository) private readonly userRepo: IUserRepository,
    @Inject(IUserFactory) private readonly userFactory: IUserFactory,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: RegisterUserCommand): Promise<any> {
    const { user } = command;

    const newUser = this.userFactory.createUser(
      user.name,
      user.email,
      user.password,
      user.dateOfBirth,
    );

    const savedUser = this.publisher.mergeObjectContext(
      await this.userRepo.create(newUser),
    );

    savedUser.commit();
    return savedUser;
  }
}
