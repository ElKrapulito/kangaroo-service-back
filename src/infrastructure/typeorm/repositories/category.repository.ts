import { ICategoryRepository } from 'src/domain/repositories/icategory.repository';
import { CategoryEntity } from '../config/category.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
