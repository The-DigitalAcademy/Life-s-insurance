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
  plans

  private apUrl = 'http://localhost:3000';

  constructor() {  
  }

  ngOnInit():void {
    this.getClient().subscribe((response: any[]) => {
      console.log(response);
      this.client = response; // Assuming your API response has a 'client' key
    });
  }


  // constructor(){  
  //   this.getClient().subscribe((response: any[]) => {
  //     console.log(resp)];
  //     this.client = resp;
  //   });

  // }
  getClient(): Observable <any>{
    return this.http.get<any[]>(`${this.apUrl}/client`);
  }
}



