import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../UI/shared--UI/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './homeInsurer.component.html',
  styleUrl: './homeInsurer.component.css',

})
export class HomeInsurerComponent {


  http = inject(HttpClient);
  client: any[] =[];

  private apUrl = 'http://localhost:4200';

  constructor(){  this.getClient().join()

  }
  
}

