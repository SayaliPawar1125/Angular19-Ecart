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
      console.log('Order Data:', this.orderForm.value);
      // Call backend API later: this.service.addOrder(this.orderForm.value).subscribe(...)
      alert('Order saved successfully!');
      this.orderForm.reset();
    }
  }
}


