const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const users = [];

const secret = 'your_jwt_secret';

// Rota para criar conta
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  res.json({ message: 'Conta criada com sucesso!' });
});

// Rota para login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: 'Usuário não encontrado!' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Senha incorreta!' });

  const token = jwt.sign({ email: user.email }, secret);
  res.json({ token });
});

// Rota protegida
app.get('/api/home', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token requerido!' });

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido!' });
    res.json({ message: `Bem-vindo, ${user.email}` });
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
