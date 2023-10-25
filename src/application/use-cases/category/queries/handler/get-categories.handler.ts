import { ICategoryRepository } from 'src/domain/repositories/icategory.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../impl/get-categories.query';
import { Inject } from '@nestjs/common';

@QueryHandler(GetCategoriesQuery)
export class GetCategoriesHandler implements IQueryHandler<GetCategoriesQuery> {
  constructor(
    @Inject(ICategoryRepository)
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(query: GetCategoriesQuery): Promise<any> {
    return await this.categoryRepository.getCategoriesByUserId(query.userId);
  }
}
