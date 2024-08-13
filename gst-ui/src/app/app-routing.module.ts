import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { RevenueSummaryComponent } from './components/revenue/revenue-summary/revenue-summary.component';
import { SaleFormComponent } from './components/sale/sale-form/sale-form.component';
import { SaleListComponent } from './components/sale/sale-list/sale-list.component';

// Defining routes
const routes: Routes = [
  { path: 'create-category', component: CategoryFormComponent },      // Route to create product category
  { path: 'view-categories', component: CategoryListComponent },      // Route to view all product categories
  { path: 'create-product', component: ProductFormComponent },        // Route to create products in categories
  { path: 'view-products', component: ProductListComponent },         // Route to view all products
  { path: 'create-sale', component: SaleFormComponent },              // Route to create a sale and capture GST rates
  { path: 'view-sales', component: SaleListComponent },               // Route to view all sales
  { path: 'view-revenue-summary', component: RevenueSummaryComponent },
  { path: '', redirectTo: '/create-category', pathMatch: 'full' },    // Default route
  { path: '**', redirectTo: '/view-categories', pathMatch: 'full' },   // Wildcard route to redirect to default
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
