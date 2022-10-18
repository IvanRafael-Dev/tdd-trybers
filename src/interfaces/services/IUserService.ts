export interface IUser {
  email: string
  username: string
  password: string
}

export interface IUserService {
  validateNewUser (user: IUser): Error | any
}
