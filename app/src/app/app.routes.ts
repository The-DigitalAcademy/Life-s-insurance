import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { ContractComponent } from './pages/contract/contract.component';
import { LandingComponent } from './pages/landing/landing.component';
<<<<<<< Updated upstream
import {  HomeInsurerComponent } from './homeInsurer/homeInsurer.component';
import { BusinessComponent } from './pages/business/business.component';
import { HomeComponent } from './pages/home/home.component';
=======
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
>>>>>>> Stashed changes

export const routes: Routes = [

    {path: "login",component: LoginComponent},
    {path: "profile",component: ProfileComponent},
    {path: 'home', title: 'Home', component: HomeComponent},
    {path: "nav",component: NavComponent,},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'home', title: 'home',component: HomeComponent },
    { path: 'contract', component: ContractComponent},
<<<<<<< Updated upstream
    { path: 'users', component: ContractComponent } ,
   {path:'homeInsurer',component:HomeInsurerComponent},
    {path: 'business', title: 'Business', component: BusinessComponent},
 
=======
    { path: 'users', component: ContractComponent },
    {path: 'business', title: 'Business', component: BusinessComponent}, 
    


>>>>>>> Stashed changes


];

<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
