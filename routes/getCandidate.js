const query = require('../db/query')

const deleteCandidate = (req, res) => {
  const { id } = req.params
  query('SELECT * FROM candidates WHERE id=?', [id]).then(response => {
    const candidates = response.map(({ id, completed }) => ({ id, completed: Boolean(completed) }))
    if (candidates.length === 0) {
      return res.json({
        error: `Candidate "${id}" doesn't exist!`,
        hint: response
      })
    }
    return res.json(candidates[0])
  }).catch(error => res.json({
    error: 'Something went wrong when deleting a candidate',
    hint: error.message
  }))
}

module.exports = deleteCandidate