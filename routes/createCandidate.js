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
  query('INSERT INTO candidates VALUES (?, ?)', [cId, 0]).then(response => {
    res.json({
      success: true,
      hint: `Candidate "${cId}" successfully created!`
    })
  }).catch(error => ({
    error: 'Something went wrong when creating a candidate',
    hint: error.message
  }))
}

module.exports = createCandidate