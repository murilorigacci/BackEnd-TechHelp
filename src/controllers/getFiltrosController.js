import express from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const { status, prioridade, responsavel } = prisma;

const app = express();
app.use(express.json());

app.get("/status", (req, res) => {
  if (chamados.length > 0) {
    res.status(200).json(status);
  } else {
    res.status(404).json({
      mensagem: "Nenhum status encontrado!",
    });
  }
});

app.get("/prioridade", (req, res) => {
  if (chamados.length > 0) {
    res.status(200).json(prioridade);
  } else {
    res.status(404).json({
      mensagem: "Nenhuma prioridade encontrado!",
    });
  }
});

app.get("/responsavel", (req, res) => {
  if (chamados.length > 0) {
    res.status(200).json(responsavel);
  } else {
    res.status(404).json({
      mensagem: "Nenhum responsável encontrado!",
    });
  }
});