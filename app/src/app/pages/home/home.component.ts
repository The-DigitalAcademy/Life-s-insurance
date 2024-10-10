import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/shared--UI/navbar/navbar.component";
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
