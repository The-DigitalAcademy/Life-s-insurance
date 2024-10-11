import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../../UI/shared--UI/navbar/navbar.component";
import { NavComponent } from "../../nav/nav.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../../../Types 3/ UserInterface'; 

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, NavbarComponent, NavComponent, HttpClientModule, CommonModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'] 
})
export class BusinessComponent implements OnInit {
  apiURL = 'http://localhost:3000/businessplan';
  businessplan: any[] = [];
  selectedPlan = '';
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPlans();
  }

  fetchPlans(): void {
    this.http.get<any[]>(this.apiURL).subscribe(
      data => this.businessplan = data,
      error => console.error('Error fetching plans:', error)
    );
  }

  isEmailValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onRegister(): void {
    if (this.isFormValid()) {
      const formData: UserInterface = {
        selectedPlan: this.selectedPlan,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        name: undefined
      };
      this.submitData(formData);
    } else {
      this.message = 'Please fill out all required fields and ensure the email is valid.';
      console.error(this.message);
    }
  }

  isFormValid(): boolean {
    return Boolean(this.firstName) && 
           Boolean(this.lastName) && 
           this.isEmailValid(this.email) && 
           Boolean(this.password) && 
           Boolean(this.selectedPlan);
  }

  resetForm(): void {
    this.selectedPlan = this.firstName = this.lastName = this.email = this.password = '';
    this.message = ''; 
  }

  private submitData(data: UserInterface): void {
    this.http.post('http://localhost:3000/profile', data).subscribe(
      response => {
        console.log('Data submitted successfully:', response);
        this.message = 'Registration successful!';
        this.resetForm();
      },
      error => {
        console.error('Error submitting data:', error);
        this.message = 'Error submitting data. Please try again.';
      }
    );
  }
}
