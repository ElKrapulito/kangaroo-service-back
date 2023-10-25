import { IAccountFactory } from '../../../../../domain/factories/account/iaccount.factory';
import { IAccountRepository } from '../../../../../domain/repositories/iaccount.repository';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateAccountCommand } from '../impl/create-account.command';
import { Inject } from '@nestjs/common';
@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler
  implements ICommandHandler<CreateAccountCommand>
{
  constructor(
    @Inject(IAccountRepository) private accountRepository: IAccountRepository,
    @Inject(IAccountFactory) private accountFactory: IAccountFactory,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: CreateAccountCommand): Promise<any> {
    const { account } = command;
    const newAccount = this.accountFactory.createAccount(
      account.name,
      account.user,
      account.amount,
    );
    const savedAccount = this.publisher.mergeObjectContext(
      await this.accountRepository.create(newAccount),
    );

    savedAccount.commit();
    return savedAccount;
  }
}
