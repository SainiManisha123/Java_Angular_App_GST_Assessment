import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/sale.service';

@Component({
  selector: 'app-revenue-summary',
  templateUrl: './revenue-summary.component.html',
  styleUrls: ['./revenue-summary.component.scss']
})
export class RevenueSummaryComponent implements OnInit {
  totalRevenueForDay: number = 0;
  totalRevenueForMonth: number = 0;
  totalRevenueForYear: number = 0;

  constructor(private saleService: SaleService) {}

  ngOnInit(): void {debugger;
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

    this.saleService.getTotalRevenueForDay(today).subscribe(data => {debugger;
      this.totalRevenueForDay = data;
    });

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    this.saleService.getTotalRevenueForMonth(year, month).subscribe(data => {
      this.totalRevenueForMonth = data;
    });

    this.saleService.getTotalRevenueForYear(year).subscribe(data => {
      this.totalRevenueForYear = data;
    });
  }
}
