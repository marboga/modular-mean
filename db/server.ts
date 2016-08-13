import * as express from 'express';
import { Router, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

import { db, UserModel } from './index';  

const PORT: number = process.env.PORT || 8000
const app: express.Application = express()
const API = db

let User = UserModel

app.use(cors())
app.use( bodyParser.urlencoded( { extended: true }) )
app.use( bodyParser.json() )

let router: Router = express.Router()

router.route( '/' )
  .post(( req: Request, res: Response ) => {
    let name = req.body.name
    let user = new User( { name: name })
    
    let userPromise = user.save()

    userPromise.then((user) => {
      res.send(user)
    })
  })
  .get(( req: Request, res: Response ) => {
    let userPromise = User.find().exec()
      
    userPromise.then(( user ) => {
      res.send(user)
    })
  })

app.use( '/api', router )

app.listen( PORT, function () {
  console.log( `Listening on port: ${PORT}` )
})
