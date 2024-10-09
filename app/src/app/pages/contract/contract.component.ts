import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../UI/shared--UI/navbar/navbar.component";

@Component({
  selector: 'app-contract',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.css'
})
export class ContractComponent {

}
