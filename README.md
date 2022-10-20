# TDD

## Config

### Dependências 
- typescript -> *npm i typescript -D*
- tsc init -> *npx tsc --init*
- ts-node-dev -> *npm i ts-node-dev -D*
- eslint -> *npm i eslint-config-standard-with-typescript -D*
- mocha, chai & sinon -> *npm i mocha @types/mocha chai @types/chai chai-http @types/chai-http sinon @types/sinon -D*
- express -> *npm i express* & *npm i @types/express -D*
- express-async-errors -> *npm i express-async-errors -D*

### Create Default App & Server

- [APP](./src/api/app.ts)
- [SERVER](./src/api/server.ts)

### Mocha script setup

- "test:integration": "mocha --require ts-node/register src/tests/integration/**/*.test.ts" 
  - *--require (require module before tests)*

- watch mode config
```json
// file .mocharc.json
{
    "require": "ts-node/register",
    "watch-files": ["./src/**/*.ts"] 
}

// update mocha script

"test:integration": "mocha src/tests/integration/**/*.test.ts --config ./.mocharc.json --watch --exit",
```

### Testando Rota basica de setup

- [Basic Test Route](./src/tests/integration/basicRoute.test.ts)

## TDD - Rota addUser

Teste que falha

```js
describe('POST /users', () => {
  describe('quando o campo "email" não é informado', () => {
    it('deve retornar um status 400', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/users')
        .send({ username: 'tryber', password: '123456' })
      expect(httpResponse.status).to.equal(400)
    })
  })
})
```

Solução

.
.
.


## Sequelize Config

- libs
  - sequelize & types, sequelize-cli
  - mysql2

- tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6",                                  
    "module": "commonjs",                            
    "rootDir": "./src",                             
    "outDir": "./dist",                            
    "esModuleInterop": true,   
    "forceConsistentCasingInFileNames": true,          
    "strict": true,                                 
    "skipLibCheck": true                        
  }
}
```

- .sequelizerc

```ts
const path = require('path');

module.exports = {
  'config': path.resolve(__dirname,'dist','database','config', 'config.js'),
  'models-path': path.resolve(__dirname,'src','database','models'),
  'seeders-path': path.resolve(__dirname,'src','database', 'seeders'),
  'migrations-path': path.resolve(__dirname,'src','database', 'migrations'),
};
```

- /database/config/config.ts
```ts
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { Options } from 'sequelize'

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: 'tdd_tryber',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false
}

module.exports = config
```

- /database/model/index.ts
```ts
import { Sequelize } from 'sequelize'
import * as config from '../config/config'

export default new Sequelize(config)
```

- add script:
  - "db:reset": "npx -y tsc && npx sequelize db:drop && npx sequelize db:create"

- create migration
- create Model