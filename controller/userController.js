const express = require('express');
const { randomUUID } = require('crypto');
const cookieParser = require('cookie-parser');

const SECRECT_W = 'computadora'

const app = express()

app.use(cookieParser(SECRECT_W))

const users = {}
const fichero = {}

app.use(express.json())

