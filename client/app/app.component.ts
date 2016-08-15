import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { IUser } from './user.interface';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {

  nameCollection: Array<IUser> = []
  errorMessage: string;

  constructor( private userService: UserService ) { }

  ngOnInit() { this.getUsers() }
  
  getUsers() {
    this.userService.getUsers()
      .subscribe(
      users => {
        users.forEach((user) => {
        console.log(user)
        this.nameCollection.push(user)
        })
      },
      error => this.errorMessage = error)
  }

  createUser( name: string ) {
    if ( !name ) return;
    
    this.userService.sendUserName( name )
    .subscribe(
      user =>  this.nameCollection.push(user),
      error => this.errorMessage = error)}
}
