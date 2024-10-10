import { Component, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject (AuthService)
  email: any;
  password: any;
message: any;
  
    
    
      onLogin(email: string, password: string) {
    
        if (!email) {
          alert("Email is required")
          return;
        }
    
        if (!password) {
          alert("Password is required")
          return;
        }
    
        this.authService.onLogin({
          email, password,
          name: ''
        });
      }
    

}
