import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product, SharedService } from '../../shared.service';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Product[] = [];

  constructor(private shared: SharedService) {
    this.products = this.shared.getProducts();
  }
  
}