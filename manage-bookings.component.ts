import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../models/booking';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  selectedBooking: Booking = this.resetBooking();
  isEditMode = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getAll().subscribe(data => {
      console.log("All Bookings: ", JSON.stringify(data));
      debugger;
      this.bookings = data;
      localStorage.setItem('bookings', JSON.stringify(data));
    });
  }

  resetBooking(): Booking {
    return {
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
  }

  submit(): void {
    if (!this.selectedBooking.guestName || !this.selectedBooking.email) {
      alert("Please fill in all required fields!");
      return;
    }

    if (this.isEditMode) {
      this.bookingService.update(this.selectedBooking).subscribe(() => {
        alert("Booking updated!");
        this.loadBookings();
        this.cancelEdit();
      });
    } else {
      this.selectedBooking.id = Date.now();
      this.bookingService.add(this.selectedBooking).subscribe(() => {
        alert("Booking added!");
        this.loadBookings();
        this.selectedBooking = this.resetBooking();
      });
    }
  }

  edit(booking: Booking): void {
    this.isEditMode = true;
    this.selectedBooking = { ...booking };
  }

  delete(id: number): void {
    if (confirm("Cancel this booking?")) {
      this.bookingService.delete(id).subscribe(() => {
        alert("Booking cancelled!");
        this.loadBookings();
      });
    }
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.selectedBooking = this.resetBooking();
  }
}
