import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatService } from '../candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  candidatsarray : any[] = []

  signupobj : {first_name:string,last_name:string,email:string,phone:string,password:string} ={
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
    password:""
  }

  constructor(private http: HttpClient,private candidat:CandidatService, private router:Router) {

  }

  ngOnInit(): void {
  }

  signup(){
    this.candidat.getallcandidats()
    console.log(this.signupobj.first_name,this.signupobj.last_name,this.signupobj.email,this.signupobj.password)

    
    localStorage.setItem('userEmail', this.signupobj.email);
    localStorage.setItem('userpassword',this.signupobj.password);
    localStorage.setItem('userfirstname',this.signupobj.first_name);
    localStorage.setItem('userlastname',this.signupobj.last_name);

    let bodyData = {
      "firstname" : this.signupobj.first_name,
      "lastname" : this.signupobj.last_name,
      "email" : this.signupobj.email,
      "phone" : this.signupobj.phone,
      "password" : this.signupobj.password,
    };

    this.http.post("http://localhost:8080/api/v1/candidat/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        this.candidat.getallcandidats();
        this.signupobj.first_name = '';
        this.signupobj.last_name = '';
        this.signupobj.email = '';
        this.signupobj.phone = '';
        this.signupobj.password = '';
    });

    this.router.navigateByUrl("/profile")
  }

}
