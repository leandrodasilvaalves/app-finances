import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute} from '@angular/router';

import { CategoryModel } from '@core/models/category.model';
import { CategoryService } from '@core/services/http.clients/category.service';
import { PageModel } from '@core/models/page.model';
import { Pagination } from '@shared/components/pagination/pagination';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  imports: [
    CommonModule,
    Pagination,
  ],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category implements OnInit {
  categories$!: Observable<PageModel<CategoryModel>>;

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categories$ = this.route.queryParamMap.pipe(
      map(params => Number(params.get('page')) || 1),
      switchMap(page => this.service.getAll(page))
    );
  }
}
