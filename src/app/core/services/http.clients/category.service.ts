import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from 'app/core/models/category.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { PageModel } from '@core/models/page.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.apiBaseUrl}/categories`;

  constructor(private http: HttpClient){}

  public getAll(): Observable<PageModel<CategoryModel>>
  {
    return this.http.get<PageModel<CategoryModel>>(this.apiUrl);
  }
}
