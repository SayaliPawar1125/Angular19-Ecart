import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  name: string;
  imgPath: string;
  price: number;
}

export interface Order {
  date: string;
  price: number;
  status: string;
}

export interface Category {
  catid:number;
  name: string;
  products: Product[];
}


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.API_URL}/products`, product);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.API_URL}/orders`);
  }

  addOrder(order: Order): Observable<any> {
    return this.http.post(`${this.API_URL}/orders`, order);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/categories`);
  }

  addCategory(category: { name: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/categories`, category);
  }


  getFrequentProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/frequent-products`);
  }
}
