import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../product/product.component';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-category',
  imports: [CommonModule, ProductComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
   categories: any[] = [];
  constructor(private Service: SharedService) {
    this.categories = this.Service.getCategories();
  }

}
