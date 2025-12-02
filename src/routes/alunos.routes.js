const express = require("express");
const {
  cadastrarAluno,
  listarAlunos,
} = require("../controllers/alunos.controller");

const router = express.Router();

router.post("/alunos", cadastrarAluno);
router.get("/alunos", listarAlunos);

module.exports = router;
