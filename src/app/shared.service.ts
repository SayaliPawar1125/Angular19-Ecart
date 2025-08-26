import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

export interface Order {
  date: string;
  amount: number;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class SharedService {
  constructor() {}

  private data = {
    categories: [
      {
        name: 'Mobiles',
        products: [
          { name: 'Samsung Galaxy S24', imageUrl: '/samsung.jpeg', price: 899 },
          { name: 'Google Pixel 9', imageUrl: '/pixel.jpeg', price: 799 },
          { name: 'iPhone 15', imageUrl: '/iphone.jpeg', price: 999 }
        ]
      },
      {
        name: 'Laptops',
        products: [
          { name: 'Dell XPS 15', imageUrl: '/dell.jpeg', price: 1500 },
          { name: 'Lenovo ThinkPad', imageUrl: '/thinkpad.jpeg', price: 1200 }
        ]
      }
    ],
    products: [
      { name: 'Mouse', price: 1299, imageUrl: '/mouse.jpeg' },
      { name: 'Keyboard', price: 3000, imageUrl: '/keyboard.jpeg' },
      { name: 'Monitor', price: 11000, imageUrl: '/monitor.jpeg' },
      { name: 'Speaker', price: 10000, imageUrl: '/speaker.jpeg' },
      { name: 'Webcam', price: 1599, imageUrl: '/webcam.jpeg' },
      { name: 'Laptop', price: 75000, imageUrl: '/laptop.jpeg' },
      { name: 'Tablet', price: 50000, imageUrl: '/tablet.jpeg' },
      { name: 'T-Shirt', price: 1599, imageUrl: '/tshirt.jpeg' },
      { name: 'Shirt', price: 1000, imageUrl: '/shirt.jpeg' },
      { name: 'Bag', price: 1599, imageUrl: '/bag.jpeg' },
      { name: 'Travel Bag', price: 2299, imageUrl: '/travelbag.jpeg' },
      { name: 'Mobile', price: 1500, imageUrl: '/mobile.jpeg' },
      { name: 'Table', price: 11000, imageUrl: '/table.jpeg' },
      { name: 'Cupboard', price: 12999, imageUrl: '/cubboard.jpeg' },
      { name: 'Watch', price: 2000, imageUrl: '/watch.jpeg' },
      { name: 'HeadPhone', price: 1599, imageUrl: '/headphones.jpeg' }
    ],
    orders: [
      { date: '2025-08-22', amount: 1299, status: 'Delivered' },
      { date: '2025-08-20', amount: 499, status: 'Pending' },
      { date: '2025-08-18', amount: 899, status: 'Cancelled' }
    ]
  };

  getProducts(): Product[] {
    return this.data.products;
  }

  getCategories() {
    return this.data.categories;
  }

  getOrders(): Order[] {
    return this.data.orders;
  }
}















































// for understanding i tried this
 
  // getCategories() {
  //   return [
  //     {
  //       name: 'Mobiles',
  //       products: [
  //         {
  //           name: 'Samsung Galaxy S24',
  //           imageUrl: '/samsung.jpeg',
  //           price: 899,
  //         },
  //         {
  //           name: 'Google Pixel 9',
  //           imageUrl: '/pixel.jpeg',
  //           price: 799,
  //         },
  //         { name: 'iPhone 15', 
  //           imageUrl: '/iphone.jpeg', 
  //           price: 999 },
  //       ],
  //     },
  //     {
  //       name: 'Laptops',
  //       products: [
  //         { name: 'Dell XPS 15', imageUrl: '/dell.jpeg', price: 1500 },
  //         {
  //           name: 'Lenovo ThinkPad',
  //           imageUrl: '/thinkpad.jpeg',
  //           price: 1200,
  //         },
  //       ],
  //     },
  //   ];
  // }

 
  // getProducts(): Product[] {
  //   return [
  //     { name: 'Mouse', price: 1299, imageUrl: '/mouse.jpeg' },
  //     { name: 'Keyboard', price: 3000, imageUrl: '/keyboard.jpeg' },
  //     { name: 'Monitor', price: 11000, imageUrl: '/monitor.jpeg' },
  //     { name: 'Speaker', price: 10000, imageUrl: '/speaker.jpeg' },
  //     { name: 'Webcam', price: 1599, imageUrl: '/webcam.jpeg' },
  //     { name: 'Laptop', price: 75000, imageUrl: '/laptop.jpeg' },
  //     { name: 'Tablet', price: 50000, imageUrl: '/tablet.jpeg' },
  //     { name: 'T-Shirt', price: 1599, imageUrl: '/tshirt.jpeg' },
  //     { name: 'Shirt', price: 1000, imageUrl: '/shirt.jpeg' },
  //     { name: 'Bag', price: 1599, imageUrl: '/bag.jpeg' },
  //     { name: 'Travel Bag', price: 2299, imageUrl: '/travelbag.jpeg' },
  //     { name: 'Mobile', price: 1500, imageUrl: '/mobile.jpeg' },
  //     { name: 'Table', price: 11000, imageUrl: '/table.jpeg' },
  //     { name: 'Cupboard', price: 12999, imageUrl: '/cubboard.jpeg' },
  //     { name: 'Watch', price: 2000, imageUrl: '/watch.jpeg' },
  //     { name: 'HeadPhone', price: 1599, imageUrl: '/headphones.jpeg' }
  //   ];
  // }