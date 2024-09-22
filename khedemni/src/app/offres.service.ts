import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  offresarray: any[]=[];
  isResultLoaded = false;
  isUpdateFormActive = false;

  id : number =0;
  title : string ="";
  desc : string="";
  skills :string="";
  
  constructor(private http: HttpClient , private router:Router,private infos:LoginService) {
    
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
}
