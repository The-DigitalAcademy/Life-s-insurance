import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavComponent } from "../../../nav/nav.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
