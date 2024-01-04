const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { usersController, imagesController, postsController, loginController} = require('./controllers/index')
const { checkId, checkUser, checkEmail, auth } = require('./middlewares/index')

const app = express()
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(morgan('tiny'));

app.post('/login', auth, loginController.login)
app.get('/users', usersController.getUsers);
app.post('/users', checkEmail, usersController.createUser);
app.get('/images', imagesController.getImages);
app.get('/posts', postsController.getPosts);
app.post('/posts', auth, postsController.createPost)
app.get('/users/:id', checkId, checkUser, usersController.getUserById);
app.delete('/posts/:id', postsController.removePost)

module.exports = app;