import { Component } from '@angular/core';
import { CategoryList } from '@features/categories/services/category.list';
import { CategoryModel } from '@core/models/category.model';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {
  categories: CategoryList;

  constructor(categories: CategoryList) {
    this.categories = categories;
  }
  getCategories(): Array<CategoryModel> {
    return this.categories.getCategories();
  }
}
