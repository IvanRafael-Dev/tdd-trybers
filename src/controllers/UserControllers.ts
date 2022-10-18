import { Request, Response } from 'express'
import { IUserService } from '../interfaces/services/IUserService'

export class UserController {
  private readonly userService: IUserService

  constructor (userService: IUserService) {
    this.userService = userService
  }

  async create (request: Request, response: Response): Promise<Response | any> {
    const { error } = this.userService.validateNewUser(request.body)
    if (error) {
      return response.status(400).json({ error })
    }
  }
}
