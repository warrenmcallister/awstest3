const range = require('lodash/range')
const faker = require('faker')
const fs = require('fs')
const path = require('path')

const createUser = require('./user')
const createProduct = require('./product')
const createMessage = require('./message')
const createSolution = require('./solution')

const users = range(0, 20).map(createUser)
const products = range(0, 50).map(createProduct)
const messages = range(0, 100).map(() => {
  const user = faker.random.arrayElement(users)
  const product = faker.random.arrayElement(products)
  return createMessage(user, product)
})
const solution = createSolution({ users, products, messages })

const writeToDisk = (data, name) => {
  const json = JSON.stringify(data, null, 2)
  const writePath = path.join(__dirname, '../data', `${name}.json`)
  fs.writeFileSync(writePath, json, 'utf-8')
}

writeToDisk(users, 'users')
writeToDisk(products, 'products')
writeToDisk(messages, 'messages')
writeToDisk(solution, 'solution')