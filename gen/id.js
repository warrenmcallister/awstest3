const generateId = require('nanoid/generate')

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

module.exports = () => generateId(alphabet, 5)