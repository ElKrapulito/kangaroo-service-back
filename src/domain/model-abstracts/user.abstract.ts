import { AggregateRoot } from '../../../kangaroo-kernel/src/core/aggregateRoot';
import { UserRegisteredEvent } from '../../application/use-cases/user/events/impl/user-registered.event';

export abstract class UserAbstract extends AggregateRoot {
  abstract name: string;
  abstract email: string;
  abstract password: string;
  abstract dateOfBirth: Date;

  generateCategories() {
    this.apply(new UserRegisteredEvent(this.id));
  }
}
