import { urlencoded, json } from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';
import * as http from 'http';

import { MongoDBConfig, router } from './index';


class ExpressServer {

  constructor(
    private _app: express.Application = express(),
    private _PORT: number = process.env.PORT || 8000
  ) {
    this.setMiddleWare()
    this.setRoutes()
  }

  private setMiddleWare() {
    this._app.use( cors() )
    this._app.use( urlencoded( { extended: true }) )
    this._app.use( json() )
  }

  private setRoutes() {
    this._app.use( '/api', router )
  }

  startServer() {
    return this._app.listen( this._PORT, () => {
      console.log( `Express server listening on port ${this._PORT}` );
    })
  }

}

let server = new ExpressServer().startServer()
let db = new MongoDBConfig()