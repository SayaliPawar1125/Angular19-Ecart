import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { OrdersComponent } from '../order/order.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CartComponent, OrdersComponent, CommonModule, NavbarComponent, RouterModule]
})
export class HomeComponent {}
