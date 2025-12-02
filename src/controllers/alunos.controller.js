const db = require("../config/database");

async function cadastrarAluno(req, res) {
  try {
    const { nome, email, turma, idade } = req.body;

    await db.query(
      "INSERT INTO alunos (nome, email, turma, idade) VALUES ($1, $2, $3, $4)",
      [nome, email, turma, idade]
    );

    return res.status(201).json({ message: "Aluno cadastrado com sucesso" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function listarAlunos(req, res) {
  try {
    const result = await db.query("SELECT * FROM alunos ORDER BY id DESC");

    return res.status(200).json(result.rows);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = { cadastrarAluno, listarAlunos };
