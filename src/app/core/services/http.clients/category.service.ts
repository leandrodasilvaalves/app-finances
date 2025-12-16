import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from 'app/core/models/category.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.apiBaseUrl}/categories`;

  constructor(private http: HttpClient){}

  public getAll(): Observable<Array<CategoryModel>>
  {
    return this.http.get<Array<CategoryModel>>(this.apiUrl);
  }
}
