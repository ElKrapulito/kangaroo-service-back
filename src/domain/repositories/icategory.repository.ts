import { IRepository } from 'kangaroo-kernel/src/core/iRepository';
import { Category } from '../models/category.model';
import { UUID } from 'crypto';

export interface ICategoryRepository extends IRepository<Category> {
  getCategoriesByUserId(userId: UUID): Promise<Category[]>;
}
export const ICategoryRepository = Symbol('ICategoryRepository');
