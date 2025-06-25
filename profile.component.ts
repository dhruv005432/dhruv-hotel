import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  bookings: any[] = [];
  apiURL = 'http://localhost:3000'; // or Swagger API root

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('dhruvHotelUser');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log('User from storage:', this.user);
      debugger;

      this.http.get<any[]>(`${this.apiURL}/bookings?email=${this.user.email}`)
        .subscribe(data => {
          console.log('Past Bookings:', data);
          this.bookings = data;
        });
    }
  }

  updateProfile(): void {
    this.http.put(`${this.apiURL}/users/${this.user.id}`, this.user)
      .subscribe(() => {
        localStorage.setItem('dhruvHotelUser', JSON.stringify(this.user));
        alert('✅ Profile updated!');
      });
  }

  logout(): void {
    localStorage.removeItem('dhruvHotelUser');
    alert('👋 Logged out!');
    location.href = '/login';
  }

  deleteProfile(): void {
    if (confirm('Delete your profile permanently?')) {
      this.http.delete(`${this.apiURL}/users/${this.user.id}`)
        .subscribe(() => {
          localStorage.removeItem('dhruvHotelUser');
          alert('❌ Profile deleted!');
          location.href = '/register';
        });
    }
  }

  onFileChange(event: any): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.user.profilePic = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
