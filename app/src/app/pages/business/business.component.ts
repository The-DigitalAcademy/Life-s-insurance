import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  selectedPlan: string = '';
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
firstName: any;
lastName: any;
email: any;
password: any;

 
  onSubmit() {
    if (this.selectedPlan && this.formData.firstName && this.formData.email && this.formData.password) {
      console.log('Form Submitted', this.formData, 'Selected Plan:', this.selectedPlan);
    
    } else {
      console.error('Form is incomplete');
    }
  }


}




