import { Routes } from "@angular/router";
import { CategoryForm } from "./components/category-form/category-form";
import { Category } from "./category";

export const CategoriesRoutes: Routes = [
  { path: 'new', component: CategoryForm },
  { path: '', component: Category },
];
