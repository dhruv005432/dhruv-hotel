import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  apiURL = 'http://localhost:3000/users'; // or Swagger API

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      alert('❌ Please fill in all fields!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('❌ Passwords do not match!');
      return;
    }

    const user = {
      id: Date.now(),
      fullName: this.fullName,
      email: this.email,
      password: this.password
    };

    console.log('Registering user:', JSON.stringify(user));
    debugger;
    localStorage.setItem('dhruvHotelUser', JSON.stringify(user));

    // Save to db.json or Swagger backend
    this.http.post(this.apiURL, user).subscribe(() => {
      alert('✅ Registration successful!');
      this.router.navigate(['/login']);
    });
  }
}
