import { Component } from '@angular/core';
import { Order, SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders', 
  standalone: true,   
  imports: [CommonModule], 
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrdersComponent {
  orders: Order[] = [];

  constructor(private shared: SharedService) {
    this.orders = this.shared.getOrders();
  }
  
}
