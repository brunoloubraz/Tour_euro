const { checkId } = require('./checkId.middleware')
const { checkUser } = require('./checkUser.middleware')
const { checkEmail } = require('./checkEmail.middleware')
const { auth } = require('./auth.middleware')

module.exports = {
  checkId,
  checkUser,
  checkEmail,
  auth,
};