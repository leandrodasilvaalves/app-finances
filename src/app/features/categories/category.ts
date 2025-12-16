import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '@core/models/category.model';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoryService } from '@core/services/http.clients/category.service';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category implements OnInit {
  categories: Array<CategoryModel> = [];

  constructor(private categoriesList: CategoryService) { }

  ngOnInit(): void {
    this.categoriesList.getAll().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Error on fetching categories:', err)
    });
  }
}
