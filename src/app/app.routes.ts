import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
  {
    path: 'categories',
    loadChildren: () => import('@features/categories/categories-module')
      .then(mod => mod.CategoriesModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('@features/transactions/transactions-module')
      .then(mod => mod.TransactionsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('@features/users/users-module')
      .then(mod => mod.UsersModule)
  }
];
