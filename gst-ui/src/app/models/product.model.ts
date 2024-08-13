import { Category } from "./category.model";

export class Product {
  id!: number;
  name!: string;
  price!: number;
  category!: Category;

  constructor(id?: number, name?: string, price?: number, category?: Category) {
    this.id = id || 0;
    this.name = name || '';
    this.price = price || 0;
    this.category = category || new Category();
  }
}
