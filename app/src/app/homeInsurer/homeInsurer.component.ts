import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../UI/shared--UI/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { NavComponent } from "../nav/nav.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HttpClientModule, NavComponent,NgIf],
  templateUrl: './homeInsurer.component.html',
  styleUrl: './homeInsurer.component.css',

})
export class HomeInsurerComponent {
name: any;
message: any;
onLogin(arg0: any,arg1: any,arg2: any) {
throw new Error('Method not implemented.');
}

  authService = inject(AuthService)
email: any;
password: any;
username: any;



  onRegister(name: string, email: string, password: string) {

    if (!name) {
      alert("Username is required")
      return;
    }

    if (!email) {
      alert("Email is required")
      return;
    }

    if (!password) {
      alert("Password is required")
      return;
    }

    this.authService.onRegister({name, email, password})
  }
  
}



