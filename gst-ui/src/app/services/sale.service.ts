import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private baseUrl = 'http://localhost:8080/api/sales'; // Your Spring Boot URL

  constructor(private http: HttpClient) {}

  // Get all sales from the backend
  getAllSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.baseUrl);
  }

  // Create a new sale
  createSale(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(`${this.baseUrl}/createSale`, sale);
  }
}
