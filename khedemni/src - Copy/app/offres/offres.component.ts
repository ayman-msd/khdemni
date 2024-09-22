import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OffresService } from '../offres.service';
import { MatDialog} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';


@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})

export class OffresComponent implements OnInit {

  offresarray: any[] = this.offres.getalloffres();
  isResultLoaded = false;
  isUpdateFormActive = false;

  id : number =0;
  title : string ="";
  desc : string="";
  skills :string="";

  constructor(private http: HttpClient , private router:Router,private offres:OffresService, private dialog : MatDialog) { 
    this.getalloffres()
  }

  ngOnInit(): void {
  }
  
  getalloffres()
   {
   
   this.http.get("http://localhost:8080/api/v1/Offre/getallOffres")
 
   .subscribe((resultData: any)=>
   {
       this.isResultLoaded = true;
       console.log(resultData);
       this.offresarray = resultData;
   });
   return this.offresarray
 }

  currentPage = 1;
  itemsPerPage = 3;

  get paginatedOffres() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.offresarray.slice(startIndex, startIndex + this.itemsPerPage);
  }

  handleButtonClick() {
    // Implement the functionality for the button click
    console.log('Button clicked');
  }
  
  showOfferPopup(offre: any): void {
    console.log('offer clicked', offre);
    const dialogRef = this.dialog.open(PopupComponent, {
        width: '800px',
        data: offre // Pass the offer data to the dialog
    });
}

}
