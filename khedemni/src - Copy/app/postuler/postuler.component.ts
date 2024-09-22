import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  formData: FormData = new FormData();

  constructor(private http: HttpClient) {}

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    this.formData.set('resume', file, file.name);
  }

  submitForm(): void {
    const name = this.formData.get('name');
    const email = this.formData.get('email');

    // Add other form data as needed

    this.http.post('http://your-server-endpoint', this.formData)
      .subscribe(
        response => {
          console.log('Form submitted successfully:', response);
        },
        error => {
          console.error('Error submitting form:', error);
        }
      );
  }

  ngOnInit(): void {
  }

}
