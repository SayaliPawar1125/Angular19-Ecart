import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../shared.service';


@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
   categories: any[] = [];
 
  constructor(private service: SharedService) { }

    ngOnInit(): void {
    this.service.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

}
