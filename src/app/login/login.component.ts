import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
   
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');  
      alert(`Logged in as: ${this.username}`);
      this.router.navigate(['/dashboard']);      
      alert('Invalid credentials!');
    }
  }
}
