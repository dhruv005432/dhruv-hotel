import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  introduction = '';
  mission = '';
  vision = '';
  history: string[] = [];
  team: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    debugger;
    this.http.get<any>('http://localhost:3000/about').subscribe(data => {
      console.log("✅ About Data:", JSON.stringify(data));
      this.introduction = data.introduction;
      this.mission = data.mission;
      this.vision = data.vision;
      this.history = data.history;
      this.team = data.team;

      localStorage.setItem('about_data', JSON.stringify(data));
    });
  }
}
