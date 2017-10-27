const faker = require('faker')
const id = require('./id')

const createUser = () => ({
  id: id(),
  name: faker.name.findName()
})

module.exports = createUser