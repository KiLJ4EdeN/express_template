// index js
const { getRandomInt } = require('./lib/rand')
require('dotenv').config()
/**
 * Express router to mount user related functions on.
 * @type {Object}
 * @const
 */
var express = require('express')
var app = express('./rand.js')

// docs
app.use('/docs', express.static(__dirname + '/docs'))
// coverage
app.use('/cov', express.static(__dirname + '/coverage/lcov-report'))

/**
 * Main Route that returns a random number lower than 10
 * @name /
 * @function
 * @inner
 */

app.get('/', function (req, res) {
    res.send(`Random Number Is: ${getRandomInt(10)}`)
})

app.listen(process.env.APP_PORT, function () {
    console.log(`Listening on port ${process.env.APP_PORT}...`)
})
