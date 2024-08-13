import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/sale.service';
import { Sale } from '../../../models/sale.model';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {
  sales: Sale[] = [];
  finalBill: { totalAmount: number; totalTax: number; totalQuantity: number } | null = null;

  constructor(private saleService: SaleService) {}

  ngOnInit(): void {
    this.saleService.getAllSales().subscribe((data: Sale[]) => {
      this.sales = data;
    });
  }

  generateFinalBill(): void {
    let totalAmount = 0;
    let totalTax = 0;
    let totalQuantity = 0;

    this.sales.forEach(sale => {
      totalAmount += sale.totalPrice;
      totalTax += sale.taxAmount;
      totalQuantity += sale.quantity;
    });

    this.finalBill = {
      totalAmount,
      totalTax,
      totalQuantity
    };
  }
  
}
