import { AggregateRoot } from '../../../kangaroo-kernel/src/core/aggregateRoot';

export abstract class UserAbstract extends AggregateRoot {
  abstract name: string;
  abstract email: string;
  abstract password: string;
  abstract dateOfBirth: Date;
}
