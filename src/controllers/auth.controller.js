const db = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registrar(req, res) {
  try {
    const { nome, email, senha } = req.body;

    const hash = await bcrypt.hash(senha, 10);

    await db.query(
      "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)",
      [nome, email, hash]
    );

    return res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}
async function login(req, res) {
  try {
    const { email, senha } = req.body;

    const result = await db.query("SELECT * FROM usuarios WHERE email = $1", [
      email,
    ]);

    if (result.rowCount === 0)
      return res.status(404).json({ error: "Usuário não encontrado" });

    const user = result.rows[0];

    const valid = await bcrypt.compare(senha, user.senha);

    if (!valid) return res.status(401).json({ error: "Senha incorreta" });

    // 🔥 AQUI CRIA O TOKEN
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    return res.status(200).json({
      message: "Login bem-sucedido",
      token,
      userId: user.id,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = { registrar, login };
