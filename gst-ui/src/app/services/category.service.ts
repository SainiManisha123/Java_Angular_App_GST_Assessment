import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // Updated URL for the API endpoint provided by the Spring Boot application
  private apiUrl = 'http://localhost:8080/api/categories';

  // Inject HttpClient for making HTTP requests
  constructor(private http: HttpClient) {}

  // Fetch all categories from the backend
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/getCategories`);
  }

  // Create a new category by sending a POST request to the backend
  createCategory(category: Category): Observable<Category> {
    // Set headers if needed, e.g., Content-Type, Authorization, etc.
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Category>(`${this.apiUrl}/createCategory`, category, httpOptions);
  }
}
