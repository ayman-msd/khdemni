import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() c: any; // Input property to receive c data

  isResultLoaded = false;
  isUpdateFormActive = false;

  candidatsarray: any[]= this.getallcandidats();

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any /* Injected data from MatDialog*/,
    private http : HttpClient
  ) {  
    console.log("data",this.data)
  }


  getallcandidats()
    {
      //console.log("le nom",this.c.can.firstname)
      this.http.get("http://localhost:8080/api/v1/candidat/getallcandidats")
    
      .subscribe((resultData: any)=>
      {
          this.isResultLoaded = true;
          console.log(resultData);
          this.candidatsarray = resultData;
      });
      return this.candidatsarray
  }

}
