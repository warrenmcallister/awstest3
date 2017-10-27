const sortBy = require('lodash/sortBy')
const values = require('lodash/values')

const createSolution = ({ users, products, messages }) => {
  const solution = {}

  users.forEach(user => {
    solution[user.id] = {
      user,
      products: []
    }
  })

  messages.forEach(({ creatorId, text }) => {
    const data = solution[creatorId]
    products
      .filter(({ name, color }) => text.indexOf(name) >= 0 || text.indexOf(color) >= 0)
      .forEach(product => {
        if (data.products.indexOf(product) < 0) {
          data.products.push(product)
        }
      })
    data.products = sortBy(data.products, ({ id }) => id)
  })

  return sortBy(values(solution), ({ user }) => user.id)
}

module.exports = createSolution