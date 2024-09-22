import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src - Copy/app/candidat.service';
import { OffresService } from 'src - Copy/app/offres.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup2/popup.component';
import { InfosComponent } from './infos/infos.component';

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {

  candidaturesarray : any[]=this.getallcandidatures()

  isResultLoaded = false;
  isUpdateFormActive = false;

  constructor(private offres:OffresService,private candidat : CandidatService,private http:HttpClient,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  getallcandidatures()
   {
   
   this.http.get("http://localhost:8080/api/v1/candidature/getallcandidatures")
 
   .subscribe((resultData: any)=>
   {
       this.isResultLoaded = true;
       console.log(resultData);
       this.candidaturesarray = resultData;
   });
   return this.candidaturesarray
 }

 showInfos(c: any): void {
  console.log("firstname: ", c.can.firstname)
  console.log('candidature clicked', c.offre.title);
  const dialogRef = this.dialog.open(InfosComponent, {
      width: '800px',
      data: c // Pass the offer data to the dialog
  });
}
}
