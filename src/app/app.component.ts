import { Component, OnInit } from '@angular/core';

import { UserService } from './user-service.service';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  nameCollection: Array<string>;
  name: string;

  errorMessage: string;
  mode = 'Observable'

  constructor( private userService: UserService ) { }

  addName( name: string ) {
    if ( !name ) {
      return;
    }
    this.userService.sendUserName( name )
      .subscribe(
      user => this.nameCollection.push( user ),
      error => this.errorMessage = error
      )
  }
}
