import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostulerComponent } from './postuler/postuler.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OffresComponent } from './offres/offres.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { OffesAdminComponent } from './offes-admin/offes-admin.component';
import { OffreCreateComponent } from './offre-create/offre-create.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'postuler', component: PostulerComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'offres-admin', component: OffesAdminComponent },
  { path: 'offre-create', component: OffreCreateComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'candidats', component: CandidatsComponent },
  { path: 'candidatures', component: CandidaturesComponent },
  { path: 'error404', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
