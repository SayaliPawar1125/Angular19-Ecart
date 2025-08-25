import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './order/order.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavbarComponent, CartComponent, CartComponent, OrdersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecart';
}
