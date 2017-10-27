const query = require('../db/query')

const listCandidates = (req, res) => {
  query('SELECT * FROM candidates').then(candidates => {
    const json = candidates.map(({ id, completed }) => ({ id, completed: Boolean(completed) }))
    res.json(json)
  }).catch(error => ({
    error: 'Something went wrong when querying candidates',
    hint: error.message
  }))
}

module.exports = listCandidates