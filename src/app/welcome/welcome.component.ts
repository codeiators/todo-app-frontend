import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'some message'
  welcomeMessageFromService:string
  name = ''
  errorMessageFromService: string
  constructor(private route: ActivatedRoute,private welcomeDataService:WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message)
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage()
  {
   // console.log(this.welcomeDataService.executeHelloWorldServiceWithPathVariable(name).subscribe())
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfullResponse(response)
  {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error)
  {
    this.errorMessageFromService = error.error.message

  }
}

