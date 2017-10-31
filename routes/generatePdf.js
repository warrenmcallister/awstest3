const createCandidate = require('./utils/createCandidate')
const createPdf = require('./utils/createPdf')
const url = require('url')

const fullUrl = (req) => {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
  });
}

const generatePdf = (req, res) => {
  const endpointRoot = fullUrl(req)
  createCandidate(req.query)
    .then(candidateId => createPdf({ candidateId, endpointRoot }))
    .then(buffer => res.end(buffer, 'binary'))
    .catch(error => res.json({
      error: "Couldn't create PDF",
      hint: error.message
    }))
}

module.exports = generatePdf