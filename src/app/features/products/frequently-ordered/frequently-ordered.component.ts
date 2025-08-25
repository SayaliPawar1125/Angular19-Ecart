import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../shared.service';
import { ProductComponent } from '../../../product/product.component';


@Component({
  selector: 'app-frequently-ordered',
  imports: [CommonModule, ProductComponent],
  templateUrl: './frequently-ordered.component.html',
  styleUrls: ['./frequently-ordered.component.css'],
})
export class FrequentlyOrderedComponent {
  items: any[] = [];

  constructor(private Service: SharedService) {
    this.items = this.Service.getFrequentlyOrdered();
  }
}