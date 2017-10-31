const query = require('../db/query')

const deleteCandidate = (req, res) => {
  const { id } = req.params
  query('DELETE FROM candidates WHERE id=?', [id]).then(response => {
    res.json({
      success: true,
      hint: response
    })
  }).catch(error => res.json({
    error: 'Something went wrong when deleting a candidate',
    hint: error.message
  }))
}

module.exports = deleteCandidate