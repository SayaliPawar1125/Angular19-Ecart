// src/app/features/products/products.routes.ts
import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FrequentlyOrderedComponent } from './frequently-ordered/frequently-ordered.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const productsRoutes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'frequently-ordered', component: FrequentlyOrderedComponent },
  { path: 'page', component: ProductsPageComponent }
];
