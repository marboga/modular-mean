import { Router, Request, Response } from 'express';
import { UserModel as User } from '../index'


export const router = Router()

router.route( '/' )
  .post(( req: Request, res: Response ) => {
    let user = new User( { name: req.body.name })

    user.save()
      .then(( user ) => {
        res.send( user )
      })
  })
  .get(( req: Request, res: Response ) => {
    let userPromise = User.find().exec()

    userPromise.then(
      ( user ) => {
        res.send( user )
      }
    )
  })