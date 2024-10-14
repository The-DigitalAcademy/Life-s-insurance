

// 

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../../Types 3/ UserInterface';
import { NavbarComponent } from '../UI/shared--UI/navbar/navbar.component';

@Component({
  selector: 'app-home-insurer',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    FormsModule,
    HttpClientModule,
    CommonModule,
    
  ],
  templateUrl: './homeInsurer.component.html',
  styleUrls: ['./homeInsurer.component.css'],
})
export class HomeInsurerComponent implements OnInit {
  apiURL = 'http://localhost:3000/houseplans';
  housePlans: any[] = [];
  selectedPlan = '';
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  message = '';
  isSubmitted = false; // Track form submission

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPlans();
  }

  fetchPlans(): void {
    this.http.get<any[]>(this.apiURL).subscribe(
      (data) => (this.housePlans = data),
      (error) => {
        console.error('Error fetching plans:', error);
        this.message = 'Error fetching plans. Please try again later.';
      }
    );
  }

  isEmailValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // onRegister(): void {
  //   if (this.isFormValid()) {
  //     const formData: UserInterface = {
  //       name: `${this.firstName} ${this.lastName}`,
  //       firstName: this.firstName,
  //       lastName: this.lastName,
  //       email: this.email,
  //       password: this.password,
  //       selectedPlan: this.selectedPlan,
  //     };
  //     this.submitData(formData);
  //   } else {
  //     this.message =
  //       'Please fill out all required fields and ensure the email is valid.';
  //     console.error(this.message);
  //   }
  // }

  onRegister(): void {
    if (this.isFormValid()) {
      const formData: UserInterface = {
        name: `${this.firstName} ${this.lastName}`,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        selectedPlan: this.selectedPlan,
      };
      this.submitData(formData);
      
      // Prepare email content
      const subject = 'Home Insurance Registration';
      const body = `Name: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\nSelected Plan: ${this.selectedPlan}`;
      
      // Open email client
      window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      this.message =
        'Please fill out all required fields and ensure the email is valid.';
      console.error(this.message);
    }
  }
  

  submitData(data: UserInterface): void {
    this.http.post('http://localhost:3000/register', data).subscribe(
      (response: any) => {
        this.isSubmitted = true; // Show welcome message
        this.message = `Registration successful! Welcome, ${this.firstName}! We'll contact you shortly.`; // Personalized welcome message
      },
      (error) => {
        console.error('Error submitting data:', error);
        this.message = 'Error submitting data. Please try again later.';
      }
    );
  }

  isFormValid(): boolean {
    return (
      Boolean(this.firstName) &&
      Boolean(this.lastName) &&
      this.isEmailValid(this.email) &&
      Boolean(this.password) &&
      Boolean(this.selectedPlan)
    );
  }

  resetForm(): void {
    this.selectedPlan = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }
}




