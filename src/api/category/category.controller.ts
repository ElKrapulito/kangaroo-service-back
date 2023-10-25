import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UUID } from 'crypto';
import { CategoryDto } from 'src/application/dto/category.dto';
import { CreateCategoryCommand } from 'src/application/use-cases/category/command/impl/create-category.command';
import { GetCategoriesQuery } from 'src/application/use-cases/category/queries/impl/get-categories.query';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createCategory(@Body() category: CategoryDto) {
    return await this.commandBus.execute(new CreateCategoryCommand(category));
  }

  @Get('user/:id')
  async getCategoriesByUserId(@Param('id') id: UUID) {
    return await this.queryBus.execute(new GetCategoriesQuery(id));
  }
}
