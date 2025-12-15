import { CategoryModel } from 'app/core/models/category.model';

export class CategoryList {
  public getCategories(): Array<CategoryModel>{
    return [
      new CategoryModel(1, "Dados pessoais"),
      new CategoryModel(2, "Despesas Temporárias"),
      new CategoryModel(3, "Educação"),
      new CategoryModel(4, "Habitação"),
      new CategoryModel(5, "Lazer"),
      new CategoryModel(6, "Transporte"),
    ];
  }
}
