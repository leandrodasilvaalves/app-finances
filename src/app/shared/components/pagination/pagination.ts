import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RangePipe } from '@shared/pipes/range-pipe';

@Component({
  selector: 'app-pagination',
  imports: [
    CommonModule,
    RouterLink,
    RangePipe,
  ],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
  @Input({ required: true }) currentPage: number = 1;
  @Input({ required: true }) totalPages: number = 1;
  @Input({ required: true }) path: string = '/';
}
