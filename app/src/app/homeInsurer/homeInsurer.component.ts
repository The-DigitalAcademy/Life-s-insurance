
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { NavComponent } from '../nav/nav.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NavComponent, NgIf, NgFor],
  templateUrl: './homeInsurer.component.html',
  styleUrls: ['./homeInsurer.component.css'],
})
export class HomeInsurerComponent {
houseplans:any[]=[];
http = inject(HttpClient);
authService = inject(AuthService);
private apiUrl = 'http://localhost:3000';

constructor(){

  this.getHouseplans().subscribe((resp:any)=>{
    console.log(resp);
    this.houseplans = resp
  })

  
}
  getHouseplans() {
    return this.http.get(`${this.apiUrl}/houseplans`)
  }

  onRegister(name: string, email: string, password: string) {
    if (!name) {
      alert('Username is required');
      return;
    }

    if (!email) {
      alert('Email is required');
      return;
    }

    if (!password) {
      alert('Password is required');
      return;
    }

    this.authService.onRegister({ name, email, password }).subscribe({
      next: (response: { error: string; }) => {
        if (response.error) {
          alert('Registration failed: ' + response.error);
        } else {
          alert('Registration successful!');
        }
      },
      error: (error: { message: string; }) => {
        alert('Registration failed: ' + error.message);
      },
    });
  }
}
