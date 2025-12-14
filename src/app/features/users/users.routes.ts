import { Routes } from "@angular/router";
import { Login } from "./components/login/login";

export const UsersRoutes: Routes = [
  {
    path: 'login',
    component: Login,
    children: []
  }
];
