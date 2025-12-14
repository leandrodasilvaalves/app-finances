import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { Category } from './components/category/category';
import { CategoryForm } from './components/category-form/category-form';
import { CategoriesRoutes } from './categories.routes';



@NgModule({
  declarations: [
    Category,
    CategoryForm
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(CategoriesRoutes)
  ],
  exports: [
  ]
})
export class CategoriesModule { }
