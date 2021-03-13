const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const config = require('../config')


app.use(bodyParser.json())
//components


app.use('/api', (req, res) => {
    res.send('Is this working?')
})


app.listen(config.api.port, () => {
    console.log(`Main API listening on http://${config.api.host}:${config.api.port}`)
})



