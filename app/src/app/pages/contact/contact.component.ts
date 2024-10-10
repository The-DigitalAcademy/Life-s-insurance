import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../UI/shared--UI/navbar/navbar.component";

@Component({
  selector: 'app-contract',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
