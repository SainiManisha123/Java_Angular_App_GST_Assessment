import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getTotalRevenueForDay(date: string): Observable<number> {
    const params = new HttpParams().set('date', date);
    return this.http.get<number>(`${this.baseUrl}/totalRevenueForDay`, { params });
  }

  getTotalRevenueForMonth(year: number, month: number): Observable<number> {
    const params = new HttpParams().set('year', year.toString()).set('month', month.toString());
    return this.http.get<number>(`${this.baseUrl}/totalRevenueForMonth`, { params });
  }

  getTotalRevenueForYear(year: number): Observable<number> {
    const params = new HttpParams().set('year', year.toString());
    return this.http.get<number>(`${this.baseUrl}/totalRevenueForYear`, { params });
  }
}
