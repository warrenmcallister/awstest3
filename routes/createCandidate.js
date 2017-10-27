const query = require('../db/query')
const id = require('../gen/id')

const createCandidate = (req, res) => {
  const { name } = req.body
  if (!name || name.length === 0) {
    return res.json({
      error: 'name field is mandatory'
    })
  }
  const cId = `${name.toLowerCase().replace(' ', '-')}-${id()}`
  query('INSERT INTO candidates VALUES (?, ?)', [cId, 0]).then(candidates => {
    const json = candidates.map(({ id, completed }) => ({ id, completed: Boolean(completed) }))
    res.json(json)
  }).catch(error => ({
    error: 'Something went wrong when creating a candidate',
    hint: error.message
  }))
}

module.exports = createCandidate