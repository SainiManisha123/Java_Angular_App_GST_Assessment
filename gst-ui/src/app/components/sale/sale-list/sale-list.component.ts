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

  constructor(private saleService: SaleService) {}

  ngOnInit(): void {
    this.saleService.getAllSales().subscribe((data: Sale[]) => {
      this.sales = data;
    });
  }
}
