
import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BusinessComponent } from './pages/business/business.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeInsurerComponent } from './homeInsurer/homeInsurer.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';




export const routes: Routes = [

    {path: "login",component: LoginComponent},
    {path: "profile",component: ProfileComponent},
    {path: 'home', title: 'Home', component: HomeComponent},
    {path: "nav",component: NavComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'business', title: 'Business', component: BusinessComponent },
    {path:'homeInsurer',component:HomeInsurerComponent},
    



];




