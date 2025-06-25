import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    debugger;
    const formData = { ...this.contact };
    console.log('📤 Contact Form Data:', JSON.stringify(formData));
    localStorage.setItem('dhruvContact', JSON.stringify(formData));

    this.http.post('http://localhost:3000/contacts', formData).subscribe(() => {
      alert('✅ Your message has been sent!');
      this.contact = { name: '', email: '', message: '' };
    });
  }

  goTo(platform: string) {
    if (platform === 'facebook') {
      window.open('https://www.facebook.com/+917862832972', '_blank');
    } else if (platform === 'instagram') {
      window.open('https://www.instagram.com/dhruv_0591', '_blank');
    } else if (platform === 'whatsapp') {
      window.open('https://wa.me/917862832972', '_blank');
    }
  }
}
