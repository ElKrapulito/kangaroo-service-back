import { UUID } from 'crypto';
import { Category } from '../../models/category.model';
import { User } from '../../models/user.model';

export interface ICategoryFactory {
  createCategory(name: string, user?: User | UUID): Category;
}

export const ICategoryFactory = Symbol('ICategoryFactory');
