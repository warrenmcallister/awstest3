const removeAccents = require('remove-accents')
const query = require('../../db/query')

const createCandidate = ({ name }) => {
  if (!name || name.length === 0) {
    return Promise.reject(new Error("'name' is mandatory"))
  }
  const id = removeAccents(name.toString()).toLowerCase().replace(/\s+/g, '-')
  return query('INSERT INTO candidates VALUES (?, ?)', [id, 0])
    .then(response => id)
    .catch(error => {
      if (error.code && error.code === 'ER_DUP_ENTRY') {
        return Promise.resolve(id)
      }
      return Promise.reject(error)
    })
}

module.exports = createCandidate