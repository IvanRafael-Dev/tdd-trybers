import { MissingParamError } from './../errors/missing-param-error'
import { IUser, IUserService } from './../interfaces/services/IUserService'

export class UserServices implements IUserService {
  validateNewUser (user: IUser): Error | void {
    const requiredFields = ['email', 'username', 'password']
    for (const field of requiredFields) {
      if (!user[field as keyof IUser]) {
        throw new MissingParamError(`O campo "${field}" é obrigatório`)
      }
    }
  }
}
