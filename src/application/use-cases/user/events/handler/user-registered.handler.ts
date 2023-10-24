import { ICategoryRepository } from '../../../../../domain/repositories/icategory.repository';
import { EventPublisher, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserRegisteredEvent } from '../impl/user-registered.event';
import { Inject } from '@nestjs/common';
import { ICategoryFactory } from '../../../../../domain/factories/category/icategory.factory';

@EventsHandler(UserRegisteredEvent)
export class UserRegisteredHandler
  implements IEventHandler<UserRegisteredEvent>
{
  private categoriesList = [
    'Transference',
    'Car payment',
    'Gym',
    'Health',
    'Food',
    'Studies',
  ];

  constructor(
    @Inject(ICategoryFactory) private categoryFactory: ICategoryFactory,
    @Inject(ICategoryRepository)
    private categoryRepository: ICategoryRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async handle(event: UserRegisteredEvent) {
    const newCategories = this.categoriesList.map((categoryName) =>
      this.categoryFactory.createCategory(categoryName, event.userId),
    );

    const savedCategories = await Promise.all(
      newCategories.map(async (category) =>
        this.publisher.mergeObjectContext(
          await this.categoryRepository.create(category),
        ),
      ),
    );

    savedCategories.forEach((category) => category.commit());
  }
}
