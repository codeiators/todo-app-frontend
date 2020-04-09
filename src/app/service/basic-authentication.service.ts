import { Injectable } from '@angular/core';
import { HttpInterceptorBasicAuthService } from './http/http-interceptor-basic-auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from'rxjs/operators';
import { API_URL } from '../app.constants';


export const Token='token'
export const AUTHENTICATED_USER='authenticatedUser'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  

  constructor(private http:HttpClient) { }

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

  executeAuthenticationService(username,password)
  {
     
    let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password);
    
     let headers = new HttpHeaders({
       Authorization:basicAuthHeaderString
     })
  return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers}).pipe(
    map(

      data => {
        sessionStorage.setItem(AUTHENTICATED_USER,username);
        sessionStorage.setItem(Token,basicAuthHeaderString);
        return data;
      }

    )
  );
  }

 getAuthenticatedUser()
 {
   let user = sessionStorage.getItem(AUTHENTICATED_USER);
   return !(user===null)
 }

 getAuthenticatedToken()
 {
   if(this.getAuthenticatedUser())
   return (sessionStorage.getItem(Token))
 }
  isUserLoggedIn()
  {
    let user =sessionStorage.getItem(AUTHENTICATED_USER);
    console.log(user === null)
    return !(user === null)
  }

  logout()
  {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(Token);
  }
}


export class AuthenticationBean{
  constructor(public message:string)
  {

  }
}