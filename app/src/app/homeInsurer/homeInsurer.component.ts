// import { RouterOutlet } from '@angular/router';
// import { HttpClient, HttpClientModule } from '@angular/common/http';


// import { NgFor, NgIf } from '@angular/common';
// import { Component, inject } from '@angular/core';

// import { NavbarComponent } from '../../UI/shared--UI/navbar/navbar.component';
// import { AuthService } from '../../Services/auth.service';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [RouterOutlet, HttpClientModule,NavbarComponent, NgIf, NgFor],
//   templateUrl: './homeInsurer.component.html',
//   styleUrls: ['./homeInsurer.component.css'],
// })
// export class HomeInsurerComponent {
// houseplans:any[]=[];
// http = inject(HttpClient);
// authService = inject(AuthService);
// private apiUrl = 'http://localhost:3001/';
// feature: any;
// plan: any;


// constructor(){

//   this.getHouseplans().subscribe((resp:any)=>{
//     console.log(resp);
//     this.houseplans = resp

//   })


// }
//   getHouseplans() {

//     return this.http.get(${this.apiUrl}/houseplans
   
//   }

//   onRegister(name: string, email: string, password: string) {
//     if (!name) {
//       alert('Username is required');
//       return;
//     }

//     if (!email) {
//       alert('Email is required');
//       return;
//     }

//     if (!password) {
//       alert('Password is required');
//       return;
//     }



    
//   }
// }

// import { RouterOutlet } from '@angular/router';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { NgFor, NgIf } from '@angular/common';
// import { Component, inject } from '@angular/core';
// import { NavbarComponent } from '../../UI/shared--UI/navbar/navbar.component';
// import { AuthService } from '../../Services/auth.service';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [RouterOutlet, HttpClientModule, NavbarComponent, NgIf, NgFor],
//   templateUrl: './homeInsurer.component.html',
//   styleUrls: ['./homeInsurer.component.css'],
// })
// export class HomeInsurerComponent {
//   houseplans: any[] = [];
//   http = inject(HttpClient);
//   authService = inject(AuthService);
//   private apiUrl = 'http://localhost:3001/';

//   constructor() {
//     this.getHouseplans().subscribe((resp: any) => {
//       console.log(resp);
//       this.houseplans = resp;
//     });
//   }

//   getHouseplans() {
//     return this.http.get(`${this.apiUrl}/houseplans`);
//   }

//   onRegister(name: string, email: string, password: string) {
//     if (!name) {
//       alert('Username is required');
//       return;
//     }

//     if (!email) {
//       alert('Email is required');
//       return;
//     }

//     if (!password) {
//       alert('Password is required');
//       return;
//     }

//     const userData = { name, email, password };
//     this.authService.onRegister(UserInterface);
//   }
// }

import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
// import { NavbarComponent } from '../../UI/shared--UI/navbar/navbar.component';

import { AuthService } from '../Services/auth.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgIf, NgFor],
  templateUrl: './homeInsurer.component.html',
  styleUrls: ['./homeInsurer.component.css'],
})
export class HomeInsurerComponent {
  houseplans: any[] = [];
  selectedPlan: string = '';
  http = inject(HttpClient);
  authService = inject(AuthService);
  private apiUrl = 'http://localhost:3001/';

  constructor() {
    this.getHouseplans().subscribe((resp: any) => {
      console.log(resp);
      this.houseplans = resp;
    });
  }

  getHouseplans() {
    return this.http.get(`${this.apiUrl}/houseplans`);
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

    
    this.authService.onRegister(userData);
  }
}
