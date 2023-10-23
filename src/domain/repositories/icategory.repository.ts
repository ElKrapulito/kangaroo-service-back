import { IRepository } from 'kangaroo-kernel/src/core/iRepository';
import { Category } from '../models/category.model';

export interface ICategoryRepository extends IRepository<Category> {}
export const ICategoryRepository = Symbol('ICategoryRepository');
