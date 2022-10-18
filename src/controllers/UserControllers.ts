import { Request, Response } from 'express'
import { IUserService } from '../interfaces/services/IUserService'

export class UserController {
  private readonly userService: IUserService

  constructor (userService: IUserService) {
    this.userService = userService
  }

  async create (request: Request, response: Response): Promise<Response | any> {
    try {
      this.userService.validateNewUser(request.body)
    } catch (error: any) {
      return response.status(error.status).json({ error: error.message })
    }
  }
}
