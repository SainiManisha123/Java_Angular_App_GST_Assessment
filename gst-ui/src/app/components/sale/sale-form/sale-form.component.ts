import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Sale } from 'src/app/models/sale.model';
import { ProductService } from 'src/app/services/product.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss']
})
export class SaleFormComponent implements OnInit {
  sale: Sale = new Sale();
  products: Product[] = [];
  selectedProduct?: Product;

  constructor(
    private productService: ProductService,
    private saleService: SaleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  onProductChange(): void {
    this.selectedProduct = this.products.find(p => p.id === this.sale.product?.id);
    if (this.selectedProduct) {
      this.sale.taxAmount = this.calculateTax();
      this.sale.totalPrice = this.calculateTotalPrice();
    }
  }

  calculateTax(): number {
    return this.selectedProduct ? this.selectedProduct.price * this.selectedProduct.category.gstRate / 100 : 0;
  }

  calculateTotalPrice(): number {
    return this.selectedProduct ? this.sale.quantity * (this.selectedProduct.price + this.sale.taxAmount) : 0;
  }

  createSale(): void {
    this.saleService.createSale(this.sale).subscribe(
      response => {
        console.log('Sale created successfully:', response);
        this.router.navigate(['/sales-list']); // Redirect to sales list
      },
      error => {
        console.error('Error creating sale:', error);
      }
    );
  }
}
