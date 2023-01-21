const { Router } = require('express');
const messagesController = require('../controller/messageController');
const routerMessages = Router()

routerMessages.get('/', messagesController.getAllMessages)
routerMessages.post('/', messagesController.createMessage)

module.exports = routerMessages