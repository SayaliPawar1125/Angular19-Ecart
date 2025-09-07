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
      category_id: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      is_popular: [false]
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


