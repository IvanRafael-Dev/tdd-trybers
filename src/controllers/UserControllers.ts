import { Request, Response } from 'express'
import { IUserService } from '../interfaces/services/IUserService'

export class UserController {
  private readonly userService: IUserService

  constructor (userService: IUserService) {
    this.userService = userService
  }

  async create (request: Request, response: Response): Promise<Response> {
    this.userService.validateNewUser(request.body)
    return response.sendStatus(201)
  }
}
