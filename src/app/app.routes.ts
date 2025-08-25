
import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

export const appRoutes: Routes = [
  {
     path: 'products',
    loadChildren: () =>
      import('./features/products/products.routes').then(m => m.productsRoutes)
  },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: '/products/category', pathMatch: 'full' },
  { path: '**', redirectTo: '/products/category' }
];
