import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre-create',
  templateUrl: './offre-create.component.html',
  styleUrls: ['./offre-create.component.css']
})
export class OffreCreateComponent implements OnInit {
  title : string=''
  desc : string=''
  skills : string=''
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  create(){
    let bodyData = {
      "title" : this.title,
      "desc" : this.desc,
      "skills" : this.skills
    };

    this.http.post("http://localhost:8080/api/v1/Offre/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        //this.candidat.getallcandidats();
        this.title = '';
        this.desc = '';
        this.skills = '';
    });

    this.router.navigateByUrl("/offres-admin")
  }

  updateSaveButtonState() {
    this.isSaveButtonDisabled = this.title.trim() === '' || this.desc.trim() === ''|| this.skills.trim() === '';
  }

  isSaveButtonDisabled: boolean = true;
}
