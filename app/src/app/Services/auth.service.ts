import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../../../Types 3/ UserInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  onLogin(arg0: { email: string; password: string; name: string; firstName: string; lastName: string; selectedPlan: string; }) {
    throw new Error('Method not implemented.');
  }
  private users: UserInterface[] = [];
  private router = inject(Router);

  constructor() {}

  onRegister(userData: UserInterface) {
    const userEmail = userData.email;

  for (let i = 0; i < this.users.length; i++) 
      if (this.users[i].email == userEmail) {
        alert(`${userEmail} already taken`);
        return;
      }
    }}
