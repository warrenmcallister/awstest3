const express = require('express')
const bodyParser = require('body-parser')
const basicauthMiddleware = require('basicauth-middleware')

const setup = require('./db/setup')
const users = require('./data/users.json')
const products = require('./data/products.json')
const messages = require('./data/messages.json')

const serveJson = require('./routes/serveJson')
const createCandidate = require('./routes/createCandidate')
const listCandidates = require('./routes/listCandidates')
const candidateMiddleware = require('./routes/candidateMiddleware')
const saveSolution = require('./routes/saveSolution')
const deleteCandidate = require('./routes/deleteCandidate')

const port = process.env.PORT || 3000

const app = express()

const auth = basicauthMiddleware(process.env.ADMIN_USER, process.env.ADMIN_PASS)

app.use(bodyParser.json())

app.set('json spaces', 2)

app.get('/', serveJson({
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
}))

app.get('/users', candidateMiddleware, serveJson(users))
app.get('/products', candidateMiddleware, serveJson(products))
app.get('/messages', candidateMiddleware, serveJson(messages))
app.post('/solution', candidateMiddleware, saveSolution)

app.post('/candidates', auth, createCandidate)
app.get('/candidates', auth, listCandidates)
app.delete('/candidate/:id', auth, deleteCandidate)

app.get('/setup', (req, res) => {
  setup()
    .then(results => res.json({ results }))
    .catch(error => res.json({ error: error.message }))
})

app.listen(port, () => console.log(`Server is running at port ${port}`))
