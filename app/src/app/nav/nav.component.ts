import { Component } from '@angular/core';
import { NavbarComponent } from "../UI/shared--UI/navbar/navbar.component";
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
