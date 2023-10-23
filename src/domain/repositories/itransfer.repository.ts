import { IRepository } from 'kangaroo-kernel/src/core/iRepository';
import { Transfer } from '../models/transfer.model';

export interface ITransferRepository extends IRepository<Transfer> {}
export const ITransferRepository = Symbol('ITransferRepository');
