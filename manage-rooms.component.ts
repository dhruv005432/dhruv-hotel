import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../services/room.service';
import { Room } from '../../../models/room';


@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent implements OnInit {
  rooms: Room[] = [];
  currentRoom: Room = { id: 0, name: '', type: '', price: 0, image: '', description: '' };
  editMode = false;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.roomService.getAllRooms().subscribe(data => {
      console.log('Rooms:', JSON.stringify(data));
      debugger;
      this.rooms = data;
    });
  }

  saveRoom(): void {
    if (!this.currentRoom.name || !this.currentRoom.type) {
      alert('Fill all required fields');
      return;
    }

    if (this.editMode) {
      this.rooms = this.rooms.map(r => r.id === this.currentRoom.id ? this.currentRoom : r);
      alert('Room updated!');
    } else {
      this.currentRoom.id = Date.now();
      this.rooms.push({ ...this.currentRoom });
      alert('Room added!');
    }

    localStorage.setItem('rooms', JSON.stringify(this.rooms));
    this.roomService.addOrUpdateRooms(this.rooms);
    this.resetForm();
  }

  editRoom(room: Room) {
    this.editMode = true;
    this.currentRoom = { ...room };
  }

  deleteRoom(id: number) {
    if (confirm('Delete room?')) {
      this.roomService.deleteRoom(id).subscribe(() => {
        alert('Room deleted!');
        this.loadRooms();
      });
    }
  }

  resetForm() {
    this.currentRoom = { id: 0, name: '', type: '', price: 0, image: '', description: '' };
    this.editMode = false;
  }
}
