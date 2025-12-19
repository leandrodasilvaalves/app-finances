import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule],
  templateUrl: './pagination.html'
})
export class Pagination {
  @Input({ required: true }) totalItems: number = 0;
  @Input({ required: true }) currentPage: number = 1;
  @Input({ required: true }) pageSize: number = 10;
  @Input({ required: true }) path: string = '';

  private router = inject(Router);

  onPageChange(page: number) {
    this.router.navigate([this.path], {
      queryParams: { page: page },
      queryParamsHandling: 'merge'
    });
  }
}
