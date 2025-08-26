import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './features/products/category/category.component';
import { FrequentlyOrderedComponent } from './features/products/frequently-ordered/frequently-ordered.component';
import { ProductsPageComponent } from './features/products/products-page/products-page.component';
import { HomeComponent } from './dashboard/home/home.component';
import { OrdersComponent } from './dashboard/order/order.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { authGuard } from './auth.guard';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'products',
    component: ProductsPageComponent,
    children: [
      { path: 'category', component: CategoryComponent },
      { path: 'frequently-ordered', component: FrequentlyOrderedComponent },
      { path: '', redirectTo: 'category', pathMatch: 'full' }
    ]
  },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
