const isNil = require('lodash/isNil')
const joi = require('joi')

const query = require('../db/query')
const expected = require('../data/solution.json')

const schema = joi.array().items(
  joi.object({
    user: joi.object({
      id: joi.string().required(),
      name: joi.string().required(),
    }).required(),
    products: joi.array().items(
      joi.object({
        id: joi.string().required(),
        name: joi.string().required(),
        color: joi.string().required()
      })
    ).required()
  }).required()
).required()

const saveSolution = (req, res) => {
  const solution = req.body
  const { candidate } = req.query

  const { error, value } = joi.validate(solution, schema)
  if (!isNil(error)) {
    return res.json({
      error: 'Your input doesnt conform the expected shape!',
      hint: error.details
    })
  }

  if (!isEqual(expected, solution)) {
    return res.json({
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