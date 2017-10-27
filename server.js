const express = require('express')
const query = require('./db/query')
const users = require('./data/users.json')
const products = require('./data/products.json')
const messages = require('./data/messages.json')

const port = process.env.PORT || 3000

const app = express()

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

app.get('/users', (req, res) => res.json(users))
app.get('/products', (req, res) => res.json(products))
app.get('/messages', (req, res) => res.json(messages))
app.get('/db', (req, res) => {
  query('SELECT version()')
    .then(results => res.json({ results }))
    .catch(error => res.json({ error: error.message }))
})

app.listen(port, () => console.log(`Server is running at port ${port}`))
