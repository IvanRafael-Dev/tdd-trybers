import { Request, Response } from 'express'
import User from '../database/models/User'
import { IUserService } from '../interfaces/services/IUserService'

export class UserController {
  private readonly userService: IUserService

  constructor (userService: IUserService) {
    this.userService = userService
  }

  async create (request: Request, response: Response): Promise<Response | any> {
    this.userService.create(request.body)
    const user = await User.create(request.body)
    console.log(user)

    return response.sendStatus(201)
  }
}
