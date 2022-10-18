import { IUser, IUserService } from './../interfaces/services/IUserService'

export class UserServices implements IUserService {
  validateNewUser (user: IUser): any {
    const requiredFields = ['email', 'username', 'password']
    for (const field of requiredFields) {
      if (!user[field as keyof IUser]) {
        return { error: `O campo "${field}" é obrigatório` }
      }
    }
  }
}
