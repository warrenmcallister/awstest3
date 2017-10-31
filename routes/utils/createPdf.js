const createTemplate = require('lodash/template')
const mdpdf = require('markdown-pdf')
const fs = require('fs')
const path = require('path')

const rawMd = fs.readFileSync(path.join(__dirname, '../../task.md'), 'utf-8')
const template = createTemplate(rawMd)

const sampleInput = {
  endpointRoot: 'http://awstest3app.aszgrz27cm.us-east-1.elasticbeanstalk.com',
  candidateId: 'nathan-finn-123'
}

const createPdf = ({ endpointRoot, candidateId }) => {
  return new Promise((resolve, reject) => {
    mdpdf().from.string(template({ endpointRoot, candidateId })).to.buffer({}, (error, buffer) => {
      if (error) {
        reject(error)
      } else {
        resolve(buffer)
      }
    })
  })
}

module.exports = createPdf


