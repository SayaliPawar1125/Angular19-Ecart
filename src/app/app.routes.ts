import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./dashboard/home/home.component').then(m => m.HomeComponent),
    
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products-page/products-page.component').then(m => m.ProductsPageComponent),
    
  },

  {
    path: 'prodadd',
    loadComponent: () => import('./prodadd/prodadd.component').then(m => m.ProdaddComponent)
  },

   {
    path: 'catadd',
    loadComponent: () => import('./catadd/catadd.component').then(m => m.CataddComponent),canActivate: [authGuard]
  },

  {
    path: 'ordadd',
    loadComponent: () => import('./ordadd/ordadd.component').then(m => m.OrdaddComponent)
  },

  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },

  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];






































// import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { ProductComponent } from './product/product.component';
// import { CategoryComponent } from './features/products/category/category.component';
// import { FrequentlyOrderedComponent } from './features/products/frequently-ordered/frequently-ordered.component';
// import { ProductsPageComponent } from './features/products/products-page/products-page.component';
// import { HomeComponent } from './dashboard/home/home.component';
// import { OrdersComponent } from './dashboard/order/order.component';
// import { CartComponent } from './dashboard/cart/cart.component';
// import { authGuard } from './auth.guard';


// export const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent, canActivate: [authGuard] },
//   {
//     path: 'products',
//     component: ProductsPageComponent,
//     children: [
//       { path: 'category', component: CategoryComponent },
//       { path: 'frequently-ordered', component: FrequentlyOrderedComponent },
//       { path: '', redirectTo: 'category', pathMatch: 'full' }
//     ]
//   },
//   { path: 'cart', component: CartComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'order', component: OrdersComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: '**', redirectTo: '/home' }
// ];
