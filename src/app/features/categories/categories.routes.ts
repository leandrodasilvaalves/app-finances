import { Routes } from "@angular/router";
import { CategoryForm } from "./components/category-form/category-form";
import { Category } from "./category";

export const CategoriesRoutes: Routes = [
  {
    path: '',
    component: Category,
    children: [
      { path: 'new', component: CategoryForm }
    ]
  }
];
