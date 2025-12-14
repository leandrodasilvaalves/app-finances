import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { Login } from './components/login/login';
import { LoginRoutes } from './login.routes';


@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [
  ]
})
export class LoginModule { }
