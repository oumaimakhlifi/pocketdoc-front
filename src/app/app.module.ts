
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { ListEventComponent } from './BackOffice/list-event/list-event.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { ResetPasswordEmailComponent } from './auth/components/reset-password-email/reset-password-email.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdddiplomeComponent } from './auth/components/adddiplome/adddiplome.component';
import { ProfileComponent } from './BackOffice/profile/profile.component';
import { EditprofileComponent } from './BackOffice/editprofile/editprofile.component';
import { ProfilComponent } from './FrontOffice/profil/profil.component';
import { EditprofilComponent } from './FrontOffice/editprofil/editprofil.component';
import { UsersComponent } from './BackOffice/users/users.component';
import { GestionprofileComponent } from './BackOffice/gestionprofile/gestionprofile.component';
import { ConventionComponent } from './oumC/conventions/convention/convention.component';
import { DemandeComponent } from './oumC/conventions/demande/demande.component';
import { UploadFileComponent } from './oumC/conventions/upload-file/upload-file.component';

import { NgModule } from '@angular/core';
import { AllFilesComponent } from './oumC/conventions/all-files/all-files.component';
import { DemBackComponent } from './BackOffice/dem-back/dem-back.component';
import { AddConventionComponent } from './BackOffice/add-convention/add-convention.component';
import { ConvBackComponent } from './BackOffice/conv-back/conv-back.component';
import { UpdateConvBackComponent } from './BackOffice/update-conv-back/update-conv-back.component';
import { AffiGeminiComponent } from './oumC/affi-gemini/affi-gemini.component';
import { StatisticsComponent } from './oumC/statistics/statistics.component';
import { NosfichesComponent } from './oumC/fiches/nosfiches/nosfiches.component';
import { SympComponent } from './oumC/symptom/symp/symp.component';
import { SympDocComponent } from './oumC/symptom/symp-doc/symp-doc.component';
import { RComponent } from './r/r.component';




@NgModule({
  declarations: [
    AppComponent,
    AllTemplateFrontComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    AllTemplateBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    ListEventComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetPasswordEmailComponent,
    AdddiplomeComponent,
    ProfileComponent,
    EditprofileComponent,
    ProfilComponent,
    EditprofilComponent,
    UsersComponent,
    GestionprofileComponent,
    ConventionComponent,
    DemandeComponent,
    UploadFileComponent,
    AllFilesComponent,
    DemBackComponent,
    AddConventionComponent,
    ConvBackComponent,
    UpdateConvBackComponent,
    AffiGeminiComponent,
    StatisticsComponent,
    NosfichesComponent,
    SympComponent,
    SympDocComponent,
    RComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
