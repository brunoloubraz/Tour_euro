const jwt = require('jsonwebtoken');
const { userService } = require('../services/index')

const secret = process.env.JWT_SECRET || 'secret';

const validateBody = (email, password) => email && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!validateBody(email, password)) {
      return res.status(401).json({ message: 'É necessário usuário e senha para fazer login'});
    }
    const user = await userService.getUserByEmail(email);
    if (!user || user.password !== password) {
      res.status(201).json({ message: 'Usuário não existe ou senha inválida'});
    }
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e.message });
  }
}

module.exports = {
  login,
};