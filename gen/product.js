
const faker = require('faker')
const id = require('./id')

const createProduct = () => ({
  id: id(),
  name: faker.commerce.productName(),
  color: faker.commerce.color()
})

module.exports = createProduct
