import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FooterService {
  private apiUrl = 'https://freeapi.miniprojectideas.com/api/HotelBooking/AddFooterLog';

  constructor(private http: HttpClient) {}

  logFooterVisit(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
