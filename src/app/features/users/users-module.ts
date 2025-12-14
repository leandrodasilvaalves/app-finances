import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { Login } from './components/login/login';
import { UsersRoutes } from './users.routes';


@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(UsersRoutes)
  ],
  exports: [
  ]
})
export class UsersModule { }
