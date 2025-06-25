export interface Booking {
  id: number;
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guestCount: number;
  status: string; // 'Pending', 'Confirmed', 'Cancelled'
}
