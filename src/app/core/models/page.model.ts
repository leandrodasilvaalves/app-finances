export interface PageModel<T> {
  currentPage: number,
  totalPages: number,
  totalItems: number,
  pageSize: number,
  hasNextPage: boolean,
  data: Array<T>,
}
