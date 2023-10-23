import { UUID } from 'crypto';
import { Category } from '../../models/category.model';
import { User } from '../../models/user.model';
import { ICategoryFactory } from './icategory.factory';

export class CategoryFactory implements ICategoryFactory {
  createCategory(name: string, user?: UUID | User): Category {
    return new Category(name, user);
  }
}
