import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesModule } from '@features/categories';
import { LoginModule } from '@features/login';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoriesModule,
    LoginModule,
  ],
  exports:[
    CategoriesModule,
    LoginModule
  ]
})
export class FeaturesModule { }
