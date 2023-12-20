const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const usersController = require('./controllers/users.controller')

const app = express()
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(morgan('tiny'));
// users

app.get('/users', usersController.getUsers);


module.exports = app;