import { Routes } from '@angular/router';
import { ContractComponent } from './pages/contract/contract.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'contract', component: ContractComponent },
    { path: 'users', component: ContractComponent } 
];

