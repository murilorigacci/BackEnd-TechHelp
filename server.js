import express from "express";
import dotenv from "dotenv";
import techHelpRoute from "./src/routes/techHelpRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("👩‍💻 Servidor funcionando...");
});
app.use(cors());

// Aqui vão todas suas Rotas
app.use("/chamados", techHelpRoute);

// Iniciar servidor escutando na porta definida
app.listen(serverPort, () => {
  console.log(`👩‍💻 Servidor rodando em http://localhost:${serverPort} 👩‍💻`);
});
