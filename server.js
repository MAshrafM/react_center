const express = require('express')
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
const app = express()
require('dotenv').config()
const PORT = process.env.SERVER_PORT || 9000
const CLIENT_PORT = process.env.PORT || 3000
const PROTOCOL = process.env.PROTOCOL || 'http'
const HOSTNAME = process.env.HOST || 'localhost'
const UPLOAD_DIR = path.join(__dirname, 'uploads/')
const CORS =
  process.env.NODE_ENV === 'production'
    ? `${PROTOCOL}://${HOSTNAME}`
    : `${PROTOCOL}://${HOSTNAME}:${CLIENT_PORT}`

if (!fs.existsSync(UPLOAD_DIR)) {
  console.warn('Creating uploads folder ...')
  fs.mkdirSync(UPLOAD_DIR)
}
console.info(`Uploads will be saved in ${UPLOAD_DIR}`)

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/uploads', function(req, res) {
  var form = new formidable.IncomingForm()

  form.parse(req)

  form.on('fileBegin', function(name, file) {
    file.path = `${UPLOAD_DIR}${file.name}`
  })

  form.on('file', function(name, file) {
    console.log('Uploaded ' + file.name)
  })

  res.header('Access-Control-Allow-Origin', CORS)
  re.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.status(200).json({
    success: true,
    status: 'Form successfully submitted'
  })
})

app.listen(PORT, _ => console.info(`Server listening on PORT ${PORT}...`))
