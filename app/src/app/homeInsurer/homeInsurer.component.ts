

// homeInsurer.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { UserInterface } from '../../../Types 3/ UserInterface';
// import { UserInterface } from '../../../Types 3/UserInterface';
import { HttpClient } from '@angular/common/http';

@Component({
  
  selector: 'app-home',
  templateUrl: './homeInsurer.component.html',
  styleUrls: ['./homeInsurer.component.css'],
})
export class HomeInsurerComponent {
  houseplans: any[] = [];
  selectedPlan: string = '';
  http = inject(HttpClient);
  authService = inject(AuthService);

  constructor(private router: Router) {
    this.fetchHousePlans();
  }

  fetchHousePlans() {
    this.authService.getHousePlans().subscribe((resp: any) => {
      this.houseplans = resp;
    });
  }

  onRegister(name: string, email: string, password: string) {
    const userData: UserInterface = {
      name,
      firstName: name, // Assuming 'name' is the first name
      lastName: '', // Adjust as necessary
      email,
      password,
      selectedPlan: this.selectedPlan,
    };

    this.authService.onRegister(userData).subscribe(
      () => {
        this.router.navigate(['/profile'], { queryParams: { plan: this.selectedPlan } });
      },
      (error) => {
        alert('Registration failed. Please try again.');
        console.error('Registration error:', error);
      }
    );
  }
}
