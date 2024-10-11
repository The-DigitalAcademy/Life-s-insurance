import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '../../../Types 3/ UserInterface';
import { Observable, of } from 'rxjs';

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

  // Register a new user
  registerUser(user: UserInterface): Observable<string> {
    // Check if the user already exists
    const userExists = this.users.some(existingUser => existingUser.email === user.email);
    if (userExists) {
      return of('User already exists');
    }

    // Add user to the list
    this.users.push(user);
    this.router.navigate(['/some-route']); // Redirect after registration
    return of('Registration successful');
  }

  // Fetch all users
  getUsers(): Observable<UserInterface[]> {
    return of(this.users);
  }

  // Additional methods (e.g., login, logout) can be added here
}
