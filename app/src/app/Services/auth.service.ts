import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../Types/ UserInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: UserInterface[] = [];
  router = inject(Router);

  constructor() {}

  onRegister(userData: UserInterface) {
    const userEmail = userData.email;

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == userEmail) {
        alert(`${userEmail} already taken`);
        return;
      }
    }

    this.users.push(userData);

    alert(`${userData.name} was registered successfully!!!`);
    this.router.navigate(['/Login']);
  }

  onLogin(userData: UserInterface) {
    console.log(userData);

    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].email == userData.email &&
        this.users[i].password == userData.password
      ) {
        alert(`Welcome ${this.users[i].name}`);
        this.router.navigate(['/dashboard']);

        return;
      }
    }

    alert('Email or Password incorrect');
  }
}
