import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking: Booking = {
    id: 0,
    guestName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guestCount: 1,
    status: 'Pending'
  };

  apiURL = 'http://localhost:3000/bookings'; // JSON Server (or use your Swagger POST API)
  allBookings: Booking[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.http.get<Booking[]>(this.apiURL).subscribe(data => {
      console.log('Loaded Bookings:', JSON.stringify(data));
      this.allBookings = data;
      localStorage.setItem('allBookings', JSON.stringify(data));
    });
  }

  submitBooking(): void {
    // Validation
    if (!this.booking.guestName || !this.booking.email || !this.booking.phone || !this.booking.checkIn || !this.booking.checkOut || !this.booking.roomType) {
      alert('Please fill all fields!');
      return;
    }

    this.booking.id = Date.now(); // Generate unique ID

    console.log('Submitting Booking:', JSON.stringify(this.booking));
    debugger;

    this.http.post<Booking>(this.apiURL, this.booking).subscribe(res => {
      alert('✅ Booking successful!');
      this.booking = {
        id: 0,
        guestName: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        roomType: '',
        guestCount: 1,
        status: 'Pending'
      };
      this.loadBookings();
    });
  }
}
