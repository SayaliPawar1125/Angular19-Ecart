import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ordadd',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './ordadd.component.html',
  styleUrl: './ordadd.component.css'
})
export class OrdaddComponent {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder, private service: SharedService) {
    this.orderForm = this.fb.group({
      date: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
  if (this.orderForm.valid) {
    const newOrder = this.orderForm.value;

    this.service.addOrder(newOrder).subscribe({
      next: (res) => {
        alert('Order saved successfully!');
        this.orderForm.reset();
      },
      error: (err) => {
        console.error('Error saving order:', err);
      }
    });
  }
}
}

