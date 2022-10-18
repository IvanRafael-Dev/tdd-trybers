import express from 'express'
import { userRouter } from '../routes/userRoutes'

class App {
  public app: express.Express

  constructor () {
    this.app = express()
    this.config()
    this.routes()
  }

  private config (): void {
    this.app.use(express.json())
  }

  private routes (): void {
    this.app.get('/', (request, response) => response.json('ok'))
    this.app.use(userRouter)
  }

  public start (PORT: number): void {
    this.app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
  }
}

export { App }

// app a ser usada para os testes de integração
export const { app } = new App()
