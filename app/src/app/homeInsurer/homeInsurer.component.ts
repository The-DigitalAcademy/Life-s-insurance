import { Component } from '@angular/core';
import { NavbarComponent } from "../UI/shared--UI/navbar/navbar.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, NavComponent],
  templateUrl: './homeInsurer.component.html',
  styleUrl: './homeInsurer.component.css',

})
export class HomeInsurerComponent {}

