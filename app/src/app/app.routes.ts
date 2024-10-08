import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [

    {
        path: "login",
        component: LoginComponent,
    },

    {
path: "profile",
component: ProfileComponent,

    },

    {
path: "nav",
component: NavComponent,
    },
];
