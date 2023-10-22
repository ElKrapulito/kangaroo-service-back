import { UUID } from 'crypto';
import { Entity } from '../../../kangaroo-kernel/src/core/entity';
import { UserAbstract } from './user.abstract';

export abstract class CategoryAbstract extends Entity {
  abstract name: string;
  abstract user: UserAbstract | UUID | undefined;
  abstract amount: number;
}
