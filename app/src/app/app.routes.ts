
import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BusinessComponent } from './pages/business/business.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { HomeInsurerComponent } from './pages/homeInsurer/homeInsurer.component';




export const routes: Routes = [

    
    {path: "profile",component: ProfileComponent},
    {path: 'home', title: 'Home', component: HomeComponent},
    {path: "nav",component: NavComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'business', title: 'Business', component: BusinessComponent },
    {path:'homeInsurer', component: HomeInsurerComponent},
    



];




