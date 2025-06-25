import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms: any[] = [];
  testimonials: any[] = [];
  newsletterEmail = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    debugger;
    this.loadRooms();
    this.loadTestimonials();
  }

  loadRooms() {
    this.http.get<any[]>('http://localhost:3000/rooms').subscribe(data => {
      this.rooms = data;
      console.log('Loaded Rooms:', JSON.stringify(this.rooms));
    });
  }

  loadTestimonials() {
    this.http.get<any[]>('http://localhost:3000/testimonials').subscribe(data => {
      this.testimonials = data;
      console.log('Loaded Testimonials:', JSON.stringify(this.testimonials));
    });
  }

  bookNow() {
    alert('Redirecting to booking page...');
    window.location.href = '/booking';
  }

  subscribeNewsletter() {
    if (this.newsletterEmail) {
      const payload = { email: this.newsletterEmail };
      this.http.post('http://localhost:3000/newsletter', payload).subscribe(() => {
        localStorage.setItem('newsletterEmail', JSON.stringify(this.newsletterEmail));
        alert('Subscribed successfully!');
        console.log('Newsletter Email:', this.newsletterEmail);
        this.newsletterEmail = '';
      });
    } else {
      alert('Please enter an email address');
    }
  }
}
