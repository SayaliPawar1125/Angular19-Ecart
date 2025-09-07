import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catadd',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './catadd.component.html',
  styleUrl: './catadd.component.css'
})
export class CataddComponent {
   categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private service: SharedService) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      this.service.addCategory(this.categoryForm.value).subscribe({
        next: res => {
          alert('Category saved successfully!');
          this.categoryForm.reset();
        },
        error: err => {
          console.error(err);
          alert('Failed to save category');
        }
      });
    }
  }
}


