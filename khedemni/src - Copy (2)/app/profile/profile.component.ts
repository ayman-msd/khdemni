import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  candidatsarray: any[]=[];
  isResultLoaded = false;
  isUpdateFormActive = false;
  userid = localStorage.getItem('userid')
  firstname = localStorage.getItem('userfirstname') 
  lastname = localStorage.getItem('userlastname')
  email = localStorage.getItem('userEmail')
  password = localStorage.getItem('userpassword')

  extractedSkills: string[] = [];


  constructor(private router:Router,private infos:LoginService,private candidat:CandidatService,private http: HttpClient) { 
    //3 reading the variables from the service (variables saved from login component)
    this.candidat.first_name = localStorage.getItem('userfirstname') || this.candidat.first_name
    this.candidat.last_name = localStorage.getItem('userlastname') || this.candidat.last_name
    let email = localStorage.getItem('userEmail')
    let password = localStorage.getItem('userpassword')

    if (email == undefined || password == undefined) {
      this.router.navigateByUrl("/error_404")
    }   
  }

  ngOnInit(): void {
  }
  
  skills:any
  extractSkillsFromResume(file: File) {
    const formData = new FormData();
    formData.append('resume', file);

    return this.skills = this.http.post<any>('http://localhost:5000/extract-skills', formData);
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement | null; 

    if (fileInput?.files && fileInput.files.length > 0) {
      const file: File = fileInput.files[0];
      const formData: FormData = new FormData();
      const renamedFile: File = new File([file], `${this.userid}.pdf`, { type: file.type });
      formData.append('resume', renamedFile);

      this.http.post<any>('http://localhost:5000/extract-skills', formData)
        .subscribe(response => {
          console.log('Extracted Skills:', response.skills);
          this.extractedSkills = response.skills;
          this.update_skills();
          // Handle extracted skills
        }, error => {
          console.error('Error:', error);
          // Handle error
        });
    }
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

  update_skills(){

    //convert skills from array to string to send them to the database 
    let sk: string = this.extractedSkills.join(', ');

    let exist = this.candidat.getallcandidats().find (c=> c.email == this.email)
    this.userid=exist.id
    if (exist != undefined){
    let bodyData = {
      "id" : this.userid,
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "phone" : exist.phone,
      "password" : this.password,
      "skills" : sk,
    };
    
    this.http.post("http://localhost:8080/api/v1/candidat/update",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      alert("skills updated successfully")
    });
  }

  }

  logout (){
    this.infos.logout()
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userpassword')
    localStorage.removeItem('userfirstname')
    localStorage.removeItem('userlastname')
   }

}
