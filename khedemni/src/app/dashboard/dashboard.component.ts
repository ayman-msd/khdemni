import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  isResultLoaded = false;
  isUpdateFormActive = false;

  offresarray: any[] = this.getalloffres();
  candidatsarray: any[] = this.getallcandidats();
  candidaturesarray: any[] = this.getallcandidatures();

  constructor(private router:Router,private http:HttpClient) {

    let email = localStorage.getItem('adminEmail')
    let password = localStorage.getItem('adminpassword')
    if (email == null || password == null) {
      this.router.navigateByUrl("/error_404")
    }
   }

  ngOnInit(): void {
  }

  logout(){
    //this.infos.logout()
    this.router.navigateByUrl("/login")
    localStorage.removeItem('adminEmail')
    localStorage.removeItem('adminpassword')
    localStorage.removeItem('adminnom')
    localStorage.removeItem('adminprenom')
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

 nb_offres(){
  return this.offresarray.length;
}

nb_candidats(){
  return this.candidatsarray.length;
}

nb_candidatures(){
  return this.candidatsarray.length;
}

tasks(){
  return (this.nb_candidatures()/this.nb_offres())*100
}

}
