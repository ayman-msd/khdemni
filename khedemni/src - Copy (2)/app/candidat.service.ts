import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {


  candidatsarray: any[]=[];
  isResultLoaded = false;
  isUpdateFormActive = false;

  id : number =0;
  first_name : string ="";
  last_name : string="";
  email :string="";
  password :string="";
  
  constructor(private http: HttpClient , private router:Router,private infos:LoginService) {
    this.getallcandidats();
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

  

}
