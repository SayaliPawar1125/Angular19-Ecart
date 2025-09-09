import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category, SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodadd',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './prodadd.component.html',
  styleUrl: './prodadd.component.css'
})
export class ProdaddComponent {
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private fb: FormBuilder, private service: SharedService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      cat_id: ['', Validators.required], 
      imgPath: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      is_popular: [false]
    });
  }

    ngOnInit(): void {
    this.service.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Error fetching categories', err)
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.service.addProduct(this.productForm.value).subscribe({
        next: res => {
          alert('Product saved successfully!');
          this.productForm.reset();
        },
        error: err => {
          console.error(err);
          alert('Failed to save product');
        }
      });
    }
  }
}


