import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {
  addOrUpdateRooms(rooms: Room[]) {
    throw new Error('Method not implemented.');
  }
  private url = 'http://localhost:3000/rooms';


  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.url);
  }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.url, room);
  }

  updateRoom(room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.url}/${room.id}`, room);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
