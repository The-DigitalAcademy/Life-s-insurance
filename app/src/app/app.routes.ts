import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BusinessComponent } from './pages/business/business.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: ContactComponent }, 
    { path: 'business', title: 'Business', component: BusinessComponent },
    { path: 'home', title: 'Home', component: HomeComponent }, 
];
