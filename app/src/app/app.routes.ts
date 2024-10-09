import { Routes } from '@angular/router';




import { ContractComponent } from './pages/contract/contract.component';
import { LandingComponent } from './pages/landing/landing.component';
import {  HomeInsurerComponent } from './homeInsurer/homeInsurer.component';
import { BusinessComponent } from './pages/business/business.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'contract', component: ContractComponent},
    { path: 'users', component: ContractComponent } ,
   {path:'homeInsurer',
    component:HomeInsurerComponent},
    
{path: 'business', title: 'Business', component: BusinessComponent},
  import { HomeComponent } from './pages/home/home.component'}


];


