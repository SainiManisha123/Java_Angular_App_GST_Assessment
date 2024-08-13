import { Product } from "./product.model";


export class Sale {
  id!: number;
  quantity!: number;
  totalPrice!: number;
  taxAmount!: number;
  product!: Product;
  saleDate!: string; // Use ISO 8601 date string

  constructor(
    id?: number,
    quantity?: number,
    totalPrice?: number,
    taxAmount?: number,
    product?: Product,
    saleDate?: string
  ) {
    this.id = id || 0;
    this.quantity = quantity || 1;
    this.totalPrice = totalPrice || 0;
    this.taxAmount = taxAmount || 0;
    this.product = product || new Product();
    this.saleDate = saleDate || new Date().toISOString();
  }
}
