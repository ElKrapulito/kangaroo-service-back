import { IAccountFactory } from './../../../../../domain/factories/account/iaccount.factory';
import { TransactionType } from './../../../../../domain/enum/transaction-type.enum';
import { IAccountRepository } from './../../../../../domain/repositories/iaccount.repository';
import { EventPublisher, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TransactionCreatedEvent } from '../impl/transaction-created.event';
import { Inject } from '@nestjs/common';

@EventsHandler(TransactionCreatedEvent)
export class TransactionCreatedHandler
  implements IEventHandler<TransactionCreatedEvent>
{
  constructor(
    @Inject(IAccountRepository) private accountRepository: IAccountRepository,
    @Inject(IAccountFactory) private accountFactory: IAccountFactory,
    private readonly publisher: EventPublisher,
  ) {}

  async handle(event: TransactionCreatedEvent) {
    const account = await this.accountRepository.findById(event.accountId);

    if (event.type === TransactionType.Income) {
      account.amount += event.amount;
    }
    if (event.type === TransactionType.Withdrawl) {
      account.amount -= event.amount;
    }

    const savedAccount = this.publisher.mergeObjectContext(
      await this.accountRepository.create(account),
    );

    savedAccount.commit();
  }
}
