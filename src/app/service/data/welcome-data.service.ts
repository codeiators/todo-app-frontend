import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean
{
  message:string
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService()
  {
  return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean")
  }

  executeHelloWorldServiceWithPathVariable(name)
  {
    //let basicAuthHeaderString = this.createBasicAuthenticationHttpHeaders();
    // let headers = new HttpHeaders({
    //   Authorization:basicAuthHeaderString
    // })
  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
  }

  // createBasicAuthenticationHttpHeaders()
  // {

  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password);
  //   return basicAuthHeaderString

  // }
}
  
  