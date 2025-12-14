import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './components/category/category';



@NgModule({
  declarations: [
    Category
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Category
  ]
})
export class CategoriesModule { }
