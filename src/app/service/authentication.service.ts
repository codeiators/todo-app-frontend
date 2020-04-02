import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  

  constructor() { }

  authenticate(username,password)
  {
    console.log(username)
    if(username==='in28minutes' && password==='dummy')
    {
       sessionStorage.setItem('authenticatedUser',username);
       return true;

    }
    return false; 
  }

  isUserLoggedIn()
  {
    let user =sessionStorage.getItem('authenticatedUser');
    console.log(user === null)
    return !(user === null)
  }

  logout()
  {
    sessionStorage.removeItem('authenticatedUser');
  }
}
