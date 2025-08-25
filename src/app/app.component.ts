import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './order/order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CartComponent, OrdersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecart';
}
