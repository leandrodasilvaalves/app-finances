import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Transactions } from './components/transactions/transactions';
import { TransactionsRoutes } from './transactions.routes';



@NgModule({
  declarations: [
    Transactions
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(TransactionsRoutes)
  ],
  exports:[
  ]
})
export class TransactionsModule { }
