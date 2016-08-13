import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import './shared/rxjs-operators';

@Injectable()
export class UserService {

  private apiUrl = 'http://localhost:8000/post'

  // Instantiate private Http module when class is instantiated
  constructor( private http: Http ) { }

  sendUserName( name: string ): Observable<string> {
    let body = JSON.stringify( { name })
    let headers = new Headers( { 'Content-Type': 'application/json' })
    let options = new RequestOptions( { headers: headers })

    return this.http.post( this.apiUrl, body, options )
      .map( this.extractData )
      .catch( this.handleError )
  }

  private handleError( error: any ) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = ( error.message ) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error( errMsg ); // log to console instead
    return Observable.throw( errMsg );
  }

  private extractData( res: Response ) {
    let body = res.json();
    return body.data || {};
  }
}