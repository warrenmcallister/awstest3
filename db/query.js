const pool = require('./pool')

const query = (queryString, replacements = []) => {
  return new Promise((resolve, reject) => {
    const callback = (error, results) => {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    }
    const args = replacements.length === 0
      ? [queryString, callback]
      : [queryString, replacements, callback]

    pool.query.call(pool, ...args)
  })
}

module.exports = query