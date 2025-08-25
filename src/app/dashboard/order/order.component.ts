import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order, SharedService } from '../../shared.service';

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
