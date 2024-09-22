import { Component, OnInit } from '@angular/core';
import { OffresService } from '../offres.service'; 
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { InfosCandidatComponent } from './infos-candidat/infos-candidat.component';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  isResultLoaded = false;
  isUpdateFormActive = false;

  candidatsarray :any=this.getallcandidats()
  
  id : number =0
  firstname : string =''
  lastname : string =''
  email : string =''
  password : string =''
  skills : string =''

  constructor(private offres : OffresService,private http:HttpClient,private dialog:MatDialog) {
  
   }

  ngOnInit(): void {
  }

  getallcandidats()
   {
   this.http.get("http://localhost:8080/api/v1/candidat/getallcandidats")
 
   .subscribe((resultData: any)=>
   {
       this.isResultLoaded = true;
       console.log(resultData);
       this.candidatsarray = resultData;
   });
   return this.candidatsarray
 }

 showInfos(c: any): void {
  console.log("firstname: ", c.firstname)
  const dialogRef = this.dialog.open(InfosCandidatComponent, {
      width: '800px',
      data: c // Pass the offer data to the dialog
  });
}

}
