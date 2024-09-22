import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) {
    let email = localStorage.getItem('adminEmail')
    let password = localStorage.getItem('adminpassword')
     console.log('email',email)
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

}
