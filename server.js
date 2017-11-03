require('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
const app = express()
const helper = require('sendgrid').mail
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const fetch = require('node-fetch')

const PORT = process.env.SERVER_PORT || 9000
const CLIENT_PORT = process.env.PORT || 3000
const PROTOCOL = process.env.PROTOCOL || 'http'
const HOSTNAME = process.env.HOST || 'localhost'
const UPLOAD_DIR = path.join(__dirname, 'uploads/')
const CORS =
  process.env.NODE_ENV === 'production'
    ? `${PROTOCOL}://${HOSTNAME}`
    : `${PROTOCOL}://${HOSTNAME}:${CLIENT_PORT}`
const ENABLE_SEND_EMAILS =
  process.env.NODE_ENV === 'production' ||
  process.env.ENABLE_SEND_EMAILS === 'true'

if (ENABLE_SEND_EMAILS) {
  console.info('Sending emails is enabled')
} else {
  console.info('Sending emails is disabled')
}

const toEmail = new helper.Email('ee.mashraf@gmail.com')
const makeSgRequest = body =>
  sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: body.toJSON()
  })

const queryParmas = obj =>
  Object.keys(obj)
    .map(key => [key, obj[key]])
    .map(
      ([key, val]) => encodeURIComponent(key) + '=' + encodeURIComponent(val)
    )
    .join('&')
const wrikeMkFolder = name =>
  fetch(process.env.WRIKE_URL, {
    body: queryParmas({
      title: name,
      description: 'folder description',
      shareds: process.env.WRIKE_SHARE_ID,
      project: process.env.WRIKE_OWNER_ID
    }),
    method: 'post',
    headers: {
      Authorization: `bearer ${process.env.WRIKE_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res => res.text())

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

  res.header('Access-Control-Allow-Origin', CORS)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  form.parse(req)

  form.on('fileBegin', function(name, file) {
    file.path = path.join(UPLOAD_DIR, file.name)
  })

  form.on('file', function(name, file) {
    console.log('Uploaded ' + file.name)
  })

  const fields = {}
  form.on('field', (name, value) => {
    fields[name] = value
  })

  let error = false
  form.on('error', err => {
    error = true
    console.log('Error while parsing request to /uploads: ' + err)
    res
      .status(400) // Bad request
      .json({ success: false, status: 'Error parsing the request' })
  })

  form.on('end', () => {
    if (error) return
    console.log('Received fields:\n' + JSON.stringify(fields, null, 2))

    if (ENABLE_SEND_EMAILS) {
      const fromEmail = new helper.Email('test@example.com')
      const subject = 'Sending with SendGrid is Fun'
      const content = new helper.Content(
        'text/plain',
        'and easy to do anywhere, even with Node.js'
      )
      const mail = new helper.Mail(fromEmail, subject, toEmail, content)
      const request = makeSgRequest(mail)
      console.log('Sending email...')
      sg.API(request, function(error, response) {
        if (error) {
          console.log('Error response received')
        }
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
      })
    }

    wrikeMkFolder('test')
      .then(status => console.log(status))
      .catch(console.log)
    console.log(queryParmas)
  })
  res.status(200).json({
    success: true,
    status: 'Form successfully submitted'
  })
})

app.listen(PORT, _ => console.info(`Server listening on PORT ${PORT}...`))
