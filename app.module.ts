import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageRoomsComponent } from './pages/admin/manage-rooms/manage-rooms.component';
import { ManageBookingsComponent } from './pages/admin/manage-bookings/manage-bookings.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { RoomFilterComponent } from './components/room-filter/room-filter.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    RoomDetailComponent,
    BookingComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    NavbarComponent,
    FooterComponent,
    ManageRoomsComponent,
    ManageBookingsComponent,
    ManageUsersComponent,
    RoomCardComponent,
    RoomFilterComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
