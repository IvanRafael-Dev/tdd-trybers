import { Router } from 'express'
import { UserController } from '../controllers/UserControllers'
import { UserServices } from '../services/UserServices'

const userServices = new UserServices()
const userControllers = new UserController(userServices)

const router = Router()

router
  .post('/users', (req, res) => userControllers.create(req, res))

export { router as userRouter }
