const query = require('../db/query')

const candidateMiddleware = (req, res, next) => {
  const { candidate } = req.query
  if (!candidate) {
    return res.json({
      error: 'Missing candidate query parameter',
      hint: 'Include ?candidate=<your-id>. Check the task description for more details!'
    })
  }
  query('SELECT * FROM candidates WHERE id=?', [candidate]).then(results => {
    if (results.length === 0) {
      return res.json({
        error: `Invalid candidate id "${candidate}"`,
        hint: 'Check the task description for your candidate id!'
      })
    }
    next()
  }).catch(error => {
    res.json({
      error: 'Something went wrong on our end.',
      hint: error.message
    })
  })
}

module.exports = candidateMiddleware