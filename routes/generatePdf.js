const createCandidate = require('./utils/createCandidate')
const createPdf = require('./utils/createPdf')

const generatePdf = (req, res) => {
  createCandidate(req.query)
    .then(candidateId => createPdf({ candidateId, endpointRoot: req.baseUrl }))
    .then(buffer => res.end(buffer, 'binary'))
    .catch(error => res.json({
      error: "Couldn't create PDF",
      hint: error.message
    }))
}