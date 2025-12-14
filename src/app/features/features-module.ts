import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesModule } from '@features/categories';
import { TransactionsModule } from './transactions/transactions-module';
import { UsersModule } from '@features/users';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoriesModule,
    UsersModule,
  ],
  exports:[
    CategoriesModule,
    TransactionsModule,
    UsersModule,
  ]
})
export class FeaturesModule { }
