import { ITransactionFactory } from './../../../../domain/factories/transaction/itransaction.factory';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateTransferCommand } from '../impl/create-transfer.command';
import { Inject } from '@nestjs/common';
import { ITransferRepository } from '../../../../domain/repositories/itransfer.repository';
import { ITransferFactory } from 'src/domain/factories/transfer/itransfer.factory';
import { ITransactionRepository } from 'src/domain/repositories/itransaction.repository';
import { TransactionType } from 'src/domain/enum/transaction-type.enum';

@CommandHandler(CreateTransferCommand)
export class CreateTransferHandler
  implements ICommandHandler<CreateTransferCommand>
{
  constructor(
    @Inject(ITransferRepository)
    private transferRepository: ITransferRepository,
    @Inject(ITransferFactory) private transferFactory: ITransferFactory,
    @Inject(ITransactionRepository)
    private transactionRepository: ITransactionRepository,
    @Inject(ITransactionFactory)
    private transactionFactory: ITransactionFactory,
    private publisher: EventPublisher,
  ) {}

  async execute(command: CreateTransferCommand): Promise<any> {
    const { transfer } = command;
    const transactionBenefited = this.transactionFactory.createTransaction(
      transfer.amount,
      transfer.accountBenefited,
      new Date(),
      TransactionType.Income,
      transfer.category,
    );
    const transactionWithdrown = this.transactionFactory.createTransaction(
      transfer.amount,
      transfer.accountWithdrown,
      new Date(),
      TransactionType.Withdrawl,
      transfer.category,
    );

    const savedTransactionBenefited = this.publisher.mergeObjectContext(
      await this.transactionRepository.create(transactionBenefited),
    );

    const savedTransactionWithdrown = this.publisher.mergeObjectContext(
      await this.transactionRepository.create(transactionWithdrown),
    );

    const newTranfer = this.transferFactory.createFactory(
      transactionWithdrown.id,
      transactionBenefited.id,
    );

    const savedTransfer = this.publisher.mergeObjectContext(
      await this.transferRepository.create(newTranfer),
    );

    savedTransactionBenefited.commit();
    savedTransactionWithdrown.commit();
    savedTransfer.commit();
    return savedTransfer;
  }
}
