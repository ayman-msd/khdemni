import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatDialogModule} from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostulerComponent } from './postuler/postuler.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OffresComponent } from './offres/offres.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './offres/popup/popup.component';
import { InfosComponent } from './candidatures/infos/infos.component';
import { OffesAdminComponent } from './offes-admin/offes-admin.component';
import { OffreCreateComponent } from './offre-create/offre-create.component';
import { InfosCandidatComponent } from './candidats/infos-candidat/infos-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostulerComponent,
    SigninComponent,
    SignupComponent,
    OffresComponent,
    ProfileComponent,
    DashboardComponent,
    CandidatsComponent,
    CandidaturesComponent,
    PopupComponent,
    InfosComponent,
    OffesAdminComponent,
    OffreCreateComponent,
    InfosCandidatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    

    //AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
