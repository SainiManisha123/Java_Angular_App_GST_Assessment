import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  category: Category = new Category();

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {}

  createCategory(): void {
    this.categoryService.createCategory(this.category).subscribe(
      response => {
        console.log('Category created successfully:', response);
        this.category = new Category(); // Reset form after success
        this.router.navigate(['/categories']); // Redirect to category list
      },
      error => {
        console.error('Error creating category:', error);
      }
    );
  }
}
