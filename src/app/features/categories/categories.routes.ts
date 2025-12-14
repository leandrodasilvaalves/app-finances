import { Routes } from "@angular/router";
import { Category } from "./components/category/category";
import { CategoryForm } from "./components/category-form/category-form";

export const CategoriesRoutes: Routes = [
  {
    path: '',
    component: Category,
    children: [
      {path:'new', component: CategoryForm}
    ]
  }
];
