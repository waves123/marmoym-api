/**
 * Copyright Marmoym 2017
 *
 * @author Gimochi
 */
import { Router, Request, Response } from 'express'
import UserController from '../../controllers/v1/UserController/UserController'

let router: Router = Router();

/**
 * ...
 */
router.get('/login', (req: Request, res: Response) => {
  console.log("hello")
  var result = UserController.getUserToken("admin");
  console.log(1, result)
  res.send("hello"+result)
})

/**
 * ...
 */
router.get('/join', (req: Request, res: Response) =>{
  res.send('join')
})

/**
 * ...
 */
router.get('/test', (req: Request, res: Response) =>{
  UserController.getUserInfo("powerwer123123", "dsds")
  res.send('test')
})

export default router;