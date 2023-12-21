const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { usersController, imagesController, postsController} = require('./controllers/index')

const app = express()
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(morgan('tiny'));
// users

app.get('/users', usersController.getUsers);
app.get('/images', imagesController.getImages);
app.get('/posts', postsController.getPosts);

module.exports = app;