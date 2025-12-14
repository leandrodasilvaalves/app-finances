import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesModule } from '@features/categories';
import { LoginModule } from '@features/login';
import { TransactionsModule } from './transactions/transactions-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoriesModule,
    LoginModule,
  ],
  exports:[
    CategoriesModule,
    LoginModule,
    TransactionsModule,
  ]
})
export class FeaturesModule { }
