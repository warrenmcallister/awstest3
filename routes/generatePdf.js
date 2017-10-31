const createCandidate = require('./utils/createCandidate')
const createPdf = require('./utils/createPdf')

const generatePdf = (req, res) => {
  const endpointRoot = req.app.mountpath || req.baseUrl
  createCandidate(req.query)
    .then(candidateId => createPdf({ candidateId, endpointRoot }))
    .then(buffer => res.end(buffer, 'binary'))
    .catch(error => res.json({
      error: "Couldn't create PDF",
      hint: error.message
    }))
}

module.exports = generatePdf