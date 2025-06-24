import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// User-facing Components
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

// Admin Components
import { AdminComponent } from './pages/admin/admin.component';
import { ManageRoomsComponent } from './pages/admin/manage-rooms/manage-rooms.component';
import { ManageBookingsComponent } from './pages/admin/manage-bookings/manage-bookings.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default redirect to Home
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'testimonials', component: TestimonialsComponent},

  // Admin and Sub-Routes
  { path: 'admin', component: AdminComponent },
  { path: 'admin/manage-rooms', component: ManageRoomsComponent },
  { path: 'admin/manage-bookings', component: ManageBookingsComponent },
  { path: 'admin/manage-users', component: ManageUsersComponent },

  // Wildcard route
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
