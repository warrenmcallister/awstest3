const express = require('express')
const bodyParser = require('body-parser')

const setup = require('./db/setup')
const users = require('./data/users.json')
const products = require('./data/products.json')
const messages = require('./data/messages.json')

const serveJson = require('./routes/serveJson')
const createCandidate = require('./routes/createCandidate')
const listCandidates = require('./routes/listCandidates')
const candidateMiddleware = require('./routes/candidateMiddleware')

const port = process.env.PORT || 3000

const app = express()


app.use(bodyParser.json())

app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.send({
    resources: [
      {
        path: '/users',
        descriptor: 'The users of the messaging board.'
      },
      {
        path: '/products',
        descriptor: 'The available products.'
      },
      {
        path: '/messages',
        descriptor: 'The messages posted by users on the messaging board.'
      },
    ]
  })
})

app.get('/users', candidateMiddleware, serveJson(users))
app.get('/products', candidateMiddleware, serveJson(products))
app.get('/messages', candidateMiddleware, serveJson(messages))

app.post('/createCandidate', createCandidate)
app.get('/candidates', listCandidates)

app.get('/setup', (req, res) => {
  setup()
    .then(results => res.json({ results }))
    .catch(error => res.json({ error: error.message }))
})

app.listen(port, () => console.log(`Server is running at port ${port}`))
