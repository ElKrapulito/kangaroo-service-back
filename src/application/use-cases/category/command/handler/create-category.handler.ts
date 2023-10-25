import { ICategoryRepository } from '../../../../../domain/repositories/icategory.repository';
import { ICategoryFactory } from '../../../../../domain/factories/category/icategory.factory';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateCategoryCommand } from '../impl/create-category.command';
import { Inject } from '@nestjs/common';
@CommandHandler(CreateCategoryCommand)
export class CreateCategoryHandler
  implements ICommandHandler<CreateCategoryCommand>
{
  constructor(
    @Inject(ICategoryFactory) private categoryFactory: ICategoryFactory,
    @Inject(ICategoryRepository)
    private categoryRepository: ICategoryRepository,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: CreateCategoryCommand): Promise<any> {
    const { category } = command;
    const newCategory = this.categoryFactory.createCategory(
      category.name,
      category.user,
    );

    const savedCategory = this.publisher.mergeObjectContext(
      await this.categoryRepository.create(newCategory),
    );

    savedCategory.commit();
    return savedCategory;
  }
}
