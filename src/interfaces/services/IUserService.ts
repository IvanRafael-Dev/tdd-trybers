export interface IUser {
  email: string
  username: string
  password: string
}

export interface IUserService {
  create (user: IUser): Error | void
}
