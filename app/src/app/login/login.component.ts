import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
apiURL ='http://localhost:3000/profile';


email: string = '';
password: string = '';



  ngOnInit(): void {
  }


}

