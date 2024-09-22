import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CandidatService } from 'src/app/candidat.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() offre: any; // Input property to receive offer data

  isResultLoaded = false;
  isUpdateFormActive = false;

  candidatsarray: any[]= this.getallcandidats();

  email = localStorage.getItem('userEmail')

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any /* Injected data from MatDialog*/,
    private http : HttpClient
  ) { 
    
  }

  compatibility(){
    let candidat = this.candidatsarray.find (c=> c.email == this.email)
    console.log("skills required",this.data.skills)
    console.log("candidat skills",candidat.skills)

    // Split the strings into arrays of skills
    const candidatSkillsArray: string[] = candidat.skills.split(',').map((skill: string) => skill.trim());
    const offreSkillsArray: string[] = this.data.skills.split(',').map((skill: string) => skill.trim());

    // Find the common skills
    const commonSkills: string[] = candidatSkillsArray.filter(skill => offreSkillsArray.includes(skill));
    console.log("matched skills",commonSkills)

    // Calculate the percentage of common skills
    const compatibility: number = (commonSkills.length / offreSkillsArray.length) * 100;
    compatibility.toFixed(2)
    console.log("compatibility",compatibility.toFixed(2))


    //alert ("vous avez bien postuler a cette offre")
    return compatibility
  }


  postuler(){
    let candidat = this.candidatsarray.find (c=> c.email == this.email)
    let id_candidat = candidat.id
    let bodyData = {
      "can": { id: id_candidat },
      "offre": { id: this.data.id },
      "compatibility" : this.compatibility(),
    };

    if (this.compatibility()>=40){
      this.http.post("http://localhost:8080/api/v1/candidature/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
      {
          alert ("vous avez bien postuler a cette offre")
      });
    }

    else alert("Vous devez avoir au minimum 40% du score pour postuler à cette offre, vous n'avez pas suffisament de skills!!!")

    
    
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
