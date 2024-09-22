import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  candidatsarray: any[]= this.candidat.getallcandidats();
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  loginobj : {email:string,password:string} ={
    email:"",
    password:""
  }


  constructor(private http: HttpClient , private router:Router,private infos:LoginService,private candidat:CandidatService) { 
  }

  ngOnInit(): void {
  }

  login( ){
    let exist = this.candidat.getallcandidats().find (c=> c.email == this.loginobj.email && c.password == this.loginobj.password)

    if (exist != undefined){
      
      if(exist.role == "candidat"){
        localStorage.setItem('userid',exist.id)
        localStorage.setItem('userEmail', exist.email);
        localStorage.setItem('userpassword',exist.password);
        localStorage.setItem('userfirstname',exist.firstname);
        localStorage.setItem('userlastname',exist.lastname);
        
        this.router.navigateByUrl("/offres")
      }
      
      else if (exist.role == "admin"){this.router.navigateByUrl("/dashboard")
        localStorage.setItem('adminEmail', exist.email);
        localStorage.setItem('adminpassword',exist.password);
        localStorage.setItem('adminfirstname',exist.firstname);
        localStorage.setItem('adminlastname',exist.lastname);
      }

      //1 sending loging infos to the service variables (go check loginservice.ts for step 2)
      this.candidat.id = exist.id
      this.candidat.first_name = exist.firstname
      this.candidat.last_name = exist.lastname
      this.candidat.email = exist.email
      this.candidat.password= exist.password
    }
    
    else alert("infos incorrectes")
    
  }
 
}
