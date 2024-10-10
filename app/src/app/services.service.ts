import { inject, Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(arg0: { email: string; password: string; }) {
    throw new Error('Method not implemented.');
  }
  read() {
    throw new Error('Method not implemented.');
  }
  users: UsersInterface[] = [];
  router = inject(Router)


  constructor() { }

  onRegister(userData: UsersInterface) {
    const userEmail = userData.email;
    console.log(userData);
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === userEmail){
        alert(`${userEmail} is taken`);
        return
      }
    }

     this.users.push(userData);
     
     alert(`${userData.username} was registered successfully`)
     this.router.navigate(['/login'])
      
  }

 signIn(userData: UsersInterface){
   console.log(userData);

  for (let i = 0; i < this.users.length; i++) {

    if(this.users[i].email === userData.email && this.users[i].password === userData.password){
      alert(`Welcome ${this.users[i].username}`)
      this.router.navigateByUrl('/home')
    }
    else{
      alert(`wrong details`)
    } 
  }
  }
}
 