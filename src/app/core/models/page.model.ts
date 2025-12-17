export class PageModel<T> {
  public page: number = 1;
  public totalPages: number = 0;
  public totalItems: number = 0;
  public pageSize: number = 10
  public hasNextPage: boolean = false;
  public data: Array<T> = []
}
