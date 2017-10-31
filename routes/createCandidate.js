const removeAccents = require('remove-accents')
const query = require('../db/query')

const createCandidate = (req, res) => {
  const { name } = req.body
  if (!name || name.length === 0) {
    return res.json({
      error: 'name field is mandatory'
    })
  }
  const id = removeAccents(`${name.toLowerCase().replace(/\s\s+/g, '-')}`)
  query('INSERT INTO candidates VALUES (?, ?)', [id, 0]).then(response => {
    res.json({
      id,
      success: true,
      hint: `Candidate '${name}' successfully created with id '${id}'!`
    })
  }).catch(error => res.json({
    error: 'Something went wrong when creating a candidate',
    hint: error.message
  }))
}

module.exports = createCandidate