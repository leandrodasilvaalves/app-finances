import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from 'app/core/models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:5000/api/v1/categories';

  constructor(private http: HttpClient){}

  public getAll(): Observable<Array<CategoryModel>>
  {
    return this.http.get<Array<CategoryModel>>(this.apiUrl);
  }

}
