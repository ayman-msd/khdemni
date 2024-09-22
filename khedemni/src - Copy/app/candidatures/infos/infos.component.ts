import { Component, OnInit } from '@angular/core';
import { Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  @Input() c: any; // Input property to receive c data

  constructor(
    public dialogRef: MatDialogRef<InfosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any /* Injected data from MatDialog*/,
    private http : HttpClient,private sanitizer: DomSanitizer
  ) {  
    console.log("data",this.data)
    
  }

  ngOnInit(): void {
  }

  openResume(){
    console.log("cv",this.data.can.id)
      const filePath = `C:\\Users\\Ayman\\Desktop\\emsi\\app\\CV\\${this.data.can.id}.pdf`;
      window.open(filePath, '_blank');
  }

  openresume(): void {
    const apiUrl = `http://localhost:3000/cv/${this.data.can.id}.pdf`;
    this.http.get(apiUrl, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        const fileURL = URL.createObjectURL(response);
        window.open(fileURL, '_blank');
      }, error => {
        console.error('Error fetching PDF:', error);
      });
  }

  
}
