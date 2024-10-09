import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';

import { ContractComponent } from './pages/contract/contract.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeInsurerComponent } from './homeInsurer/homeInsurer.component';
import { BusinessComponent } from './pages/business/business.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'nav',
    component: NavComponent,
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'users', component: ContractComponent },
  { path: 'homeInsurer', component: HomeInsurerComponent },

  { path: 'business', title: 'Business', component: BusinessComponent },
];
