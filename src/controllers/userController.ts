import { Request, Response } from 'express'

export class UserController {
  async create (request: Request, response: Response): Promise<Response | undefined> {
    if (!request.body.email) {
      return response.status(400).json({ error: 'O campo "email" é obrigatório' })
    }

    if (!request.body.username) {
      return response.status(400).json({ error: 'O campo "username" é obrigatório' })
    }

    if (!request.body.password) {
      return response.status(400).json({ error: 'O campo "password" é obrigatório' })
    }
  }
}
