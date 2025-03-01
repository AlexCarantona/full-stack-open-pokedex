/* global process */

const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5003

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('local.4')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5003')
})

