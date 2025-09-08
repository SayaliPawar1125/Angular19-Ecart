import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, SharedService, } from '../../shared.service';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe(res => {
      this.products = res;
    });
  }
}



