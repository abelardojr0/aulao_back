const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const authRoutes = require("./src/routes/auth.routes");
const alunosRoutes = require("./src/routes/alunos.routes");

const app = express();

app.use(cors());

// app.use(cors({
//   origin: ["https://meu-front.app", "https://minha-admin.app"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
// }));

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/", alunosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log("=====================================");
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`🔗 Backend disponível em: ${url}`);
  console.log("=====================================");
});
