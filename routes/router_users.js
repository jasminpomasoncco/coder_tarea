const { Router } = require('express');
const usersController = require('../controller/userController');
const routerUsers = Router()

routerUsers.get('/login', usersController.getAllMessages)
routerUsers.post('/register', usersController.createMessage)

module.exports = routerUsers