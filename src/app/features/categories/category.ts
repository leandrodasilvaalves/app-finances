import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CategoryModel } from '@core/models/category.model';
import { CategoryService } from '@core/services/http.clients/category.service';
import { PageModel } from '@core/models/page.model';
import { Pagination } from '@shared/components/pagination/pagination';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    Pagination
  ],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category implements OnInit {
  categories: PageModel<CategoryModel> = new PageModel<CategoryModel>();

  constructor(
    private categoriesList: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const page = Number(params.get('page')) || 1;
      this.loadData(page);
    });
  }

  loadData(page: number): void {
    this.categoriesList.getAll(page).subscribe({
      next: (result) => this.categories = result,
      error: (err) => console.error('Error on fetching categories:', err)
    });
  }
}
