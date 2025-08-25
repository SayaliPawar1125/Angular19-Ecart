import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FrequentlyOrderedComponent } from '../frequently-ordered/frequently-ordered.component';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule, FrequentlyOrderedComponent, CategoryComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
