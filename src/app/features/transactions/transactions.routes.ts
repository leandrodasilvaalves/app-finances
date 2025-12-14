import { Routes } from "@angular/router";
import { Transactions } from "./components/transactions/transactions";

export const TransactionsRoutes: Routes = [
  {
    path: '',
    component: Transactions,
    children: []
  }
]
