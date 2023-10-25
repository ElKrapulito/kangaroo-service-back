import { ICategoryRepository } from 'src/domain/repositories/icategory.repository';
import { CategoryEntity } from '../config/category.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Category } from 'src/domain/models/category.model';
import { UUID } from 'crypto';
@Injectable()
export class CategoryRepository
  extends BaseRepositoryTypeOrm<CategoryEntity>
  implements ICategoryRepository
{
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepo: Repository<CategoryEntity>,
  ) {
    super(categoryRepo);
  }
  async getCategoriesByUserId(userId: UUID): Promise<Category[]> {
    return await this.categoryRepo.find({ where: { user: { id: userId } } });
  }
}
