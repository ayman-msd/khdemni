import { Component, OnInit } from '@angular/core';
import { OffresService } from '../offres.service';
import { HttpClient } from '@angular/common/http';
import { createComponent } from '@angular/compiler/src/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
//import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-offes-admin',
  templateUrl: './offes-admin.component.html',
  styleUrls: ['./offes-admin.component.css']
})
export class OffesAdminComponent implements OnInit {

  isResultLoaded = false;
  isUpdateFormActive = false;

  offresarray :any=this.getalloffres()
  
  title : string =''
  des : string =''
  skills : string =''

  constructor(private offres : OffresService,private http:HttpClient,private router:Router) {
  
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

 create(){
  /*const dialogRef = this.dialog.open(createComponent, {
    width: '800px',
    
    });*/
    this.router.navigateByUrl("offre-create")
 }

 update (){

 }

 delete(data:any){
  console.log(data.id);
  this.http.delete("http://localhost:8080/api/v1/Offre/deleteOffre"+ "/"+ data.id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        alert("offre annulée")
        this.getalloffres();
    });
 }

 logout(){
  //this.infos.logout()
  this.router.navigateByUrl("/login")
  localStorage.removeItem('adminEmail')
  localStorage.removeItem('adminpassword')
  localStorage.removeItem('adminnom')
  localStorage.removeItem('adminprenom')
}

}
