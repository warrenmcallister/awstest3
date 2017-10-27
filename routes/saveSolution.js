const isArray = require('lodash/isArray')
const isEqual = require('lodash/isEqual')

const isObject = require('lodash/isObject')
const query = require('../db/query')
const expected = require('../data/solution.json')

const saveSolution = (req, res) => {
  const solution = req.body
  const { candidate } = req.query

  if (!isArray(solution)) {
    return res.json({
      error: 'Unexpected format!',
      hint: 'Request body should be an array. Check the task description for more details!'
    })
  }

  for (let i = 0; i < solution.length; i++) {
    const entry = solution[i]
    if (!isObject(entry)) {
      return res.error({
        error: `Entry at index ${i} is not an object!`,
        hint: 'Check the task description for more details!'
      })
    }
    if (!isObject(entry.user)) {
      return res.error({
        error: `Value for key 'user' in entry at index ${i} isn't an object!`,
        hint: 'Check the task description for more details!'
      })
    }
    if (!isArray(entry.products)) {
      return res.error({
        error: `Value for key 'products' in entry at index ${i} isn't an array!`,
        hint: 'Check the task description for more details!'
      })
    }
  }

  if (!isEqual(expected, solution)) {
    return res.error({
      error: `Your solution is incorrect, please try again!`,
      hint: 'Check the task description for more details!'
    })
  }

  query('UPDATE candidates SET completed=1 WHERE id=?', [candidate]).then(candidates => {
    res.json({
      success: true,
      message: 'Success! Please send your code to the hiring staff!',
      hint: 'Before you send it try cleaning it up for extra cookie points!'
    })
  }).catch(error => res.json({
    error: 'Something went wrong!',
    hint: error.message
  }))
}

module.exports = saveSolution