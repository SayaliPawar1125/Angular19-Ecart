import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order, SharedService } from '../../shared.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.service.getOrders().subscribe(res => {
      this.orders = res;
    });
  }
  
}
