import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CategoryDto } from 'src/application/dto/category.dto';
import { CreateCategoryCommand } from 'src/application/use-cases/category/impl/create-category.command';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('new')
  async createCategory(@Body() category: CategoryDto) {
    return await this.commandBus.execute(new CreateCategoryCommand(category));
  }
}
