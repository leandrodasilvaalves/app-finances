import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
  {
    path: 'categories',
    loadChildren: () => import('@features/categories/categories.routes')
      .then(mod => mod.CategoriesRoutes)
  },
  {
    path: 'transactions',
    loadChildren: () => import('@features/transactions/transactions.routes')
      .then(mod => mod.TransactionsRoutes)
  },
  {
    path: 'users',
    loadChildren: () => import('@features/users/users.routes')
      .then(mod => mod.UsersRoutes)
  }
];
