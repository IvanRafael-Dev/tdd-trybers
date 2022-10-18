import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../../api/app'

chai.use(chaiHttp)

// caso de uso: cadastrar um usuário
// requerido: email, username, password

describe('POST /users', () => {
  describe('quando o campo "email" não é informado', () => {
    it('deve retornar um status 400', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/users')
        .send({ username: 'tryber', password: '123456' })
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ error: 'O campo "email" é obrigatório' })
    })
  })

  describe('quando o campo "username" não é informado', () => {
    it('deve retornar um status 400', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/users')
        .send({ email: 'any_email@mail.com', password: '123456' })
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ error: 'O campo "username" é obrigatório' })
    })
  })

  describe('quando o campo "username" não é informado', () => {
    it('deve retornar um status 400', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/users')
        .send({ email: 'any_email@mail.com', username: 'tryber' })
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ error: 'O campo "password" é obrigatório' })
    })
  })
})
