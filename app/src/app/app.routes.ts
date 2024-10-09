



import { ContractComponent } from './pages/contract/contract.component';
import { LandingComponent } from './pages/landing/landing.component';
import {  HomeInsurerComponent } from './homeInsurer/homeInsurer.component';
import { BusinessComponent } from './pages/business/business.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'contract', component: ContractComponent},
    { path: 'login', component: LoginComponent } ,
    { path: 'home', component: HomeComponent } ,
   {path:'homeInsurer',
    component:HomeInsurerComponent},

{path: 'business', title: 'Business', component: BusinessComponent},



];



