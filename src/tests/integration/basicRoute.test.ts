import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../../api/app'

chai.use(chaiHttp)

describe('Teste de rota basica', () => {
  describe('quando a requisição é feita com sucesso', () => {
    it('deve retornar um status 200 com uma mensagem "ok"', async () => {
      const httpResponse = await chai.request(app).get('/')
      expect(httpResponse.status).to.equal(200)
    })

    it('deve retornar um status 200 com uma mensagem "ok"', async () => {
      const httpResponse = await chai.request(app).get('/')
      expect(httpResponse.body).to.be.equal('ok')
    })
  })
})
