import { MissingParamError } from './../errors/missing-param-error'
import { IUser, IUserService } from './../interfaces/services/IUserService'

type RequiredFields = ['email', 'username', 'password']

export class UserServices implements IUserService {
  create (user: IUser): Error | void {
    const requiredFields: RequiredFields = ['email', 'username', 'password']
    for (const field of requiredFields) {
      if (!user[field]) {
        throw new MissingParamError(`O campo "${field}" é obrigatório`)
      }
    }
  }
}
