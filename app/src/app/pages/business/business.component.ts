import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../../UI/shared--UI/navbar/navbar.component";
import { NavComponent } from "../../nav/nav.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,NavbarComponent,NavComponent,HttpClientModule, CommonModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'] 
})
export class BusinessComponent implements OnInit {
  apiURL = 'http://localhost:3000/plans';


  selectedPlan: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  
  plans: any[] = [];
  clients: any[] = [];
  employees: any[] = [];
  
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPlans();
    // this.fetchClients();
    // this.fetchEmployees();
  }

  fetchPlans() {
    this.http.get<any[]>(this.apiURL).subscribe(
      (data) => {
        this.plans = data;
      },
      (error) => {
        console.error('Error fetching plans:', error);
      }
    );
  }

  // fetchClients() {
  //   this.http.get<any[]>(this.clientsURL).subscribe(
  //     (data) => {
  //       this.clients = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching clients:', error);
  //     }
  //   );
  // }

  // fetchEmployees() {
  //   this.http.get<any[]>(this.employeesURL).subscribe(
  //     (data) => {
  //       this.employees = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching employees:', error);
  //     }
  //   );
  // }

  isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit() {
    if (this.firstName && this.lastName && this.isEmailValid(this.email) && this.password && this.selectedPlan) {
      console.log('Form submitted successfully:', {
        selectedPlan: this.selectedPlan,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      });

      this.submitDataToService({
        selectedPlan: this.selectedPlan,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      });

      this.resetForm();
      this.message = 'Registration successful!';
    } else {
      this.message = 'Please fill out all required fields and ensure the email is valid.';
      console.error('Please fill out all required fields and ensure the email is valid.');
    }
  }

  resetForm() {
    this.selectedPlan = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.message = ''; 
  }

  private submitDataToService(data: any) {
    console.log('Submitting data to service:', data);
  }
}
