import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
   user = {
    name: 'Sayali Pawar',
    email: 'sayali@gmail.com',
    image: '/profile.jpeg' 
  };

  constructor(private router: Router) {}

  logout() {
    
    this.router.navigate(['/home']);
  }

  
}


