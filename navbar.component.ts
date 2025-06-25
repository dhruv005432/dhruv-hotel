import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery = '';
  filteredPages: any[] = [];

  // List of all routes to search
  allPages = [
    { title: 'Home', path: '/home' },
    { title: 'Rooms', path: '/rooms' },
    { title: 'Room Detail', path: '/room-detail/1' }, // example static ID
    { title: 'Booking', path: '/booking' },
    { title: 'Testimonials', path: '/testimonials' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' },
    { title: 'Profile', path: '/profile' },
    { title: 'Admin', path: '/admin' },
    { title: 'Manage Rooms', path: '/admin/manage-rooms' },
    { title: 'Manage Bookings', path: '/admin/manage-bookings' },
    { title: 'Manage Users', path: '/admin/manage-users' }
  ];

  constructor(private router: Router) {}

  // Filter pages on input
  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchQuery = query;

    this.filteredPages = this.allPages.filter(page =>
      page.title.toLowerCase().includes(query)
    );
  }

  // Navigate to selected page
  goToPage(path: string) {
    this.router.navigate([path]);
    this.searchQuery = '';
    this.filteredPages = [];
  }
}
