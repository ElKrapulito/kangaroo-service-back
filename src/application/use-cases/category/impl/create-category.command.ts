import { CategoryDto } from '../../../dto/category.dto';

export class CreateCategoryCommand {
  constructor(public readonly category: CategoryDto) {}
}
