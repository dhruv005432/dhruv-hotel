import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];
  apiURL = 'http://localhost:3000/users'; // or Swagger endpoint

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get<any[]>(this.apiURL).subscribe(data => {
      this.users = data;
      console.log('Users loaded:', JSON.stringify(this.users));
      debugger;
    });
  }

  blockUser(user: any): void {
    user.status = user.status === 'blocked' ? 'active' : 'blocked';
    this.http.put(`${this.apiURL}/${user.id}`, user).subscribe(() => {
      alert(`User ${user.status === 'blocked' ? 'Blocked' : 'Unblocked'}!`);
      this.loadUsers();
    });
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure to delete this user?')) {
      this.http.delete(`${this.apiURL}/${id}`).subscribe(() => {
        alert('User deleted!');
        this.loadUsers();
      });
    }
  }
}
