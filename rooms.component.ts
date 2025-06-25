import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  search = '';
  maxPrice = 10000;
  selectedType = 'All';

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms() {
    this.roomService.getAllRooms().subscribe(data => {
      console.log('Rooms loaded:', JSON.stringify(data));
      this.rooms = data;
      this.applyFilters();
    });
  }

  applyFilters() {
    debugger;
    this.filteredRooms = this.rooms.filter(room =>
      (this.selectedType === 'All' || room.type === this.selectedType) &&
      room.name.toLowerCase().includes(this.search.toLowerCase()) &&
      room.price <= this.maxPrice
    );
  }

  onSearchChange() {
    this.applyFilters();
  }

  onTabClick(type: string) {
    this.selectedType = type;
    this.applyFilters();
  }

  onBook(room: Room) {
    const cart = JSON.parse(localStorage.getItem('dhruv-hotel-cart') || '[]');
    cart.push(room);
    localStorage.setItem('dhruv-hotel-cart', JSON.stringify(cart));
    alert(`✅ ${room.name} added to cart`);
    console.log('Cart Updated:', JSON.stringify(cart));
  }
  

}
