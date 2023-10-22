import { UUID } from 'crypto';
import { Category } from '../../models/category.model';
import { User } from '../../models/user.model';

export interface ICategoryFactory {
  createCategory(name: string, amount: number, user?: User | UUID): Category;
}
