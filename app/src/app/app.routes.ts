import { Routes } from '@angular/router';

import { BusinessComponent } from './pages/business/business.component';

export const routes: Routes = [
    {path: 'business', title: 'Business', component: BusinessComponent}
];

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [{ path: 'home', title: 'home',component: HomeComponent },];
