const jwt = require('jsonwebtoken');
const { userService } = require('../services')

const secret = process.env.JWT_SECRET || 'secret';

function extract(bearerToken) {
  return bearerToken.split(' ')[1];
}

const auth = async (req, res, next) => {
  const bearer = req.header('Authorization');
  if (!bearer) {
    return res.status(401).json({ error: 'Token not found' });
  }
  const token = extract(bearer);
  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getUserById(decoded.data.userId);
    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token' })
    }
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' })
  }
};

module.exports = {
  auth,
};