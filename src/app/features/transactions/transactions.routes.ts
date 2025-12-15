import { Routes } from "@angular/router";
import { Transactions } from "./transactions";

export const TransactionsRoutes: Routes = [
  {
    path: '',
    component: Transactions,
    children: []
  }
]
