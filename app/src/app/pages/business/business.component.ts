import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../../UI/shared--UI/navbar/navbar.component";
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, NavbarComponent, NavComponent],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  selectedPlan: string = '';
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';


  message: string = '';

  constructor() {}

  onSubmit() {
    if (this.firstName && this.lastName && this.email && this.password && this.selectedPlan) {
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
      this.message = 'Please fill out all required fields.';
      console.error('Please fill out all required fields.');
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
