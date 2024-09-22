import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CandidatService } from './candidat.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  candidatsarray: any[]=[];
  isResultLoaded = false;
  isUpdateFormActive = false;

  constructor(private router : Router,private http: HttpClient) { 
    //this.candidat.getallcandidats()
  }

  //2 the variables that will hold the infos coming from the loging component and send them to the conge-depose component (go check the conge-depose.ts for the 3 step)
  id : number=0
  first_name : string=""
  last_name : string=""
  email : string=""
  password : string=""

  logout (){
    //localStorage.removeItem(this.localStorageKey);
    this.router.navigateByUrl("/login")
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
