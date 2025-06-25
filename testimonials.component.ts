import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  reviews: any[] = [];
  newReview = {
    name: '',
    rating: 0,
    message: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    debugger;
    const stored = localStorage.getItem('dhruv_testimonials');
    if (stored) {
      this.reviews = JSON.parse(stored);
    } else {
      // Load from db.json (json-server) if available
      this.http.get<any[]>('http://localhost:3000/testimonials').subscribe(data => {
        this.reviews = data;
        localStorage.setItem('dhruv_testimonials', JSON.stringify(data));
      });
    }
  }

  setRating(r: number) {
    this.newReview.rating = r;
  }

  submitReview() {
    debugger;
    if (!this.newReview.name || !this.newReview.rating || !this.newReview.message) {
      alert("❌ Please fill all fields and select a rating.");
      return;
    }

    const newEntry = {
      ...this.newReview,
      time: new Date().toLocaleString()
    };

    console.log("✅ Submitting review:", JSON.stringify(newEntry));
    this.reviews.push(newEntry);
    localStorage.setItem('dhruv_testimonials', JSON.stringify(this.reviews));

    // Swagger API POST
    this.http.post('https://freeapi.miniprojectideas.com/api/HotelBooking/AddTestimonial', newEntry).subscribe(() => {
      alert('✅ Review submitted to Swagger API!');
    });

    // Optional: POST to db.json backend
    this.http.post('http://localhost:3000/testimonials', newEntry).subscribe(() => {
      console.log('✅ Saved to db.json');
    });

    this.newReview = { name: '', rating: 0, message: '' };
  }
}
