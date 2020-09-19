const express = require('express')
const app = express()

const route = require('./routes')

const path = require('path')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

app
.use(route)

.use(express.static(__dirname + '/public'))

.listen(5500, () => {
    console.log('Servidor executado em http://localhost:5500')
})