import { Component, OnInit } from '@angular/core';
import { Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-infos-candidat',
  templateUrl: './infos-candidat.component.html',
  styleUrls: ['./infos-candidat.component.css']
})
export class InfosCandidatComponent implements OnInit {

  @Input() c: any; // Input property to receive c data

  constructor(
    public dialogRef: MatDialogRef<InfosCandidatComponent>,
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

}
