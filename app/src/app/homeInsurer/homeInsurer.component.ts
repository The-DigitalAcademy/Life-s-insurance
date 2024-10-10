import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../UI/shared--UI/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, HttpClientModule],
  templateUrl: './homeInsurer.component.html',
  styleUrl: './homeInsurer.component.css',

})
export class HomeInsurerComponent {


  http = inject(HttpClient);
  client: any[] = [];
  plan: any [] =[];

  private apUrl = 'http://localhost:3000';

  constructor() {  
  }

  ngOnInit():void {
    this.getClient().subscribe((response: any[]) => {
      console.log(response);
      this.client = response; // Assuming your API response has a 'client' key
    });
  
    this.getPlan().subscribe((response: any[]) => {
      console.log(response);
      this.plan = response; // Assuming your API response has a 'client' key
    });
  };


  
  getClient(): Observable <any>{
    return this.http.get<any[]>(`${this.apUrl}/client`);
  }
  getPlan(): Observable <any>{
    return this.http.get<any[]>(`${this.apUrl}/plan`);
  }
  
}



