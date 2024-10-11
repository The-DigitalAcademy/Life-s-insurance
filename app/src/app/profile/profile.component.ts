
// import { NgIf } from "@angular/common";
// import { NavbarComponent } from "../UI/shared--UI/navbar/navbar.component";
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [NavbarComponent,NgIf],
//   templateUrl: './profile.component.html',
//   styleUrl: './profile.component.css'
// })


// export class ProfileComponent implements OnInit {
//   selectedPlan: string | null = null;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//       this.selectedPlan = params['plan']; // Get the selected plan from query params
//     });
//   }
// }

  


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css'],
// })
// export class ProfileComponent implements OnInit {
//   selectedPlan: string = '';
//   // Add other user properties as needed
  
//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//       this.selectedPlan = params['plan'];
//       // You can also retrieve other user information if passed
//     });
//   }
// }
// 

// profile.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  selectedPlan: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.selectedPlan = params['plan'];
    });
  }
}
