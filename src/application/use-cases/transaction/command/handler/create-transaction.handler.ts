import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateTransactionCommand } from '../impl/create-transaction.command';
import { Inject } from '@nestjs/common';
import { ITransactionFactory } from 'src/domain/factories/transaction/itransaction.factory';
import { ITransactionRepository } from 'src/domain/repositories/itransaction.repository';
@CommandHandler(CreateTransactionCommand)
export class CreateTransactionHandler
  implements ICommandHandler<CreateTransactionCommand>
{
  constructor(
    @Inject(ITransactionFactory)
    private transactionFactory: ITransactionFactory,
    @Inject(ITransactionRepository)
    private transactionRepository: ITransactionRepository,
    private publisher: EventPublisher,
  ) {}
  async execute(command: CreateTransactionCommand): Promise<any> {
    const { transaction } = command;
    const newTransaction = this.transactionFactory.createTransaction(
      transaction.amount,
      transaction.account,
      transaction.date,
      transaction.type,
      transaction.category,
    );

    const savedTransaction = this.publisher.mergeObjectContext(
      await this.transactionRepository.create(newTransaction),
    );

    savedTransaction.updateAccountAmount();
    savedTransaction.commit();
    return savedTransaction;
  }
}
