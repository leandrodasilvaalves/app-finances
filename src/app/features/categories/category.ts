import { Component } from '@angular/core';
import { CategoryList } from '@features/categories/services/category.list';
import { CategoryModel } from '@core/models/category.model';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {
  
  constructor(private categories: CategoryList) { }

  getCategories(): Array<CategoryModel> {
    return this.categories.getCategories();
  }
}
