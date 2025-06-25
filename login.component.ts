import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  apiURL = 'http://localhost:3000/users'; // or Swagger endpoint

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    if (!this.email || !this.password) {
      alert('Please fill in both email and password');
      return;
    }

    this.http.get<any[]>(`${this.apiURL}?email=${this.email}&password=${this.password}`).subscribe(users => {
      console.log('Login Attempt:', JSON.stringify(users));
      debugger;

      if (users.length > 0) {
        alert('✅ Login successful!');
        localStorage.setItem('dhruvHotelUser', JSON.stringify(users[0]));
        this.router.navigate(['/profile']);
      } else {
        alert('❌ Invalid credentials!');
      }
    });
  }

  socialLogin(platform: string): void {
    alert(`${platform} login coming soon...`);
  }
}
