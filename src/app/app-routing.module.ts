import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { ListEventComponent } from './BackOffice/list-event/list-event.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { ResetPasswordEmailComponent } from './auth/components/reset-password-email/reset-password-email.component';
import { AdddiplomeComponent } from './auth/components/adddiplome/adddiplome.component';
import { ProfileComponent } from './BackOffice/profile/profile.component';
import { EditprofileComponent } from './BackOffice/editprofile/editprofile.component';
import { ProfilComponent } from './FrontOffice/profil/profil.component';
import { EditprofilComponent } from './FrontOffice/editprofil/editprofil.component';
import { UsersComponent } from './BackOffice/users/users.component';
import { GestionprofileComponent } from './BackOffice/gestionprofile/gestionprofile.component';
import { DemandeComponent } from './oumC/conventions/demande/demande.component';
import { ConventionComponent } from './oumC/conventions/convention/convention.component';
import { DemBackComponent } from './BackOffice/dem-back/dem-back.component';
import { ConvBackComponent } from './BackOffice/conv-back/conv-back.component';
import { AffiGeminiComponent } from './oumC/affi-gemini/affi-gemini.component';
import { StatisticsComponent } from './oumC/statistics/statistics.component';
import { NosfichesComponent } from './oumC/fiches/nosfiches/nosfiches.component';
import { SympComponent } from './oumC/symptom/symp/symp.component';
import { SympDocComponent } from './oumC/symptom/symp-doc/symp-doc.component';
import { RComponent } from './r/r.component';

const routes: Routes = [
  {path:"",component:AllTemplateFrontComponent,
  children :[
    { path:"profile",component:ProfilComponent},
    { path :"editProfil", component:  EditprofilComponent},
    { path :"demande", component: DemandeComponent},
    { path :"convention", component : ConventionComponent},
    { path :"ask", component :AffiGeminiComponent},
    { path :"fiches", component :NosfichesComponent},
    {path :"URGENTcase", component :SympComponent},
    {path :"docURGENT", component :SympDocComponent},
    {path :"RENEWedConvention", component :RComponent}

  ]
},
    

{
      path:"admin",component:AllTemplateBackComponent,
      children:[
        { path:"event",component:ListEventComponent},
        { path:"profil",component:ProfileComponent},
        { path:"profil",component:ProfileComponent},
        { path :"editProfile", component:  EditprofileComponent},
        { path :"users", component:  UsersComponent},
        { path :"gestionprofile/:id", component:  GestionprofileComponent},
        { path:"demback",component:DemBackComponent},
        { path:"convback",component:ConvBackComponent},
        { path:"stat",component:StatisticsComponent}

      ]
    }

    ,
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path :"reset-password", component:  ResetPasswordComponent},
  { path :"reset-password-email", component:  ResetPasswordEmailComponent},
  { path :"adddiplome", component:  AdddiplomeComponent},
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
