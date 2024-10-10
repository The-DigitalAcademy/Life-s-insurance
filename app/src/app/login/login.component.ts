import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject (AuthService)
  email: any;
  password: any;
  
    
    
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
