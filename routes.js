const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const initialController = require('./src/controllers/initialController')

route
.get('/', homeController.indexLogin)
.get('/indexRegister.html', homeController.indexRegister)
.get('/initialPage.html', initialController.initialPage)

.post('/execute-login', homeController.executeLogin)

module.exports = route