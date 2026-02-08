const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const DATA_FILE = "./dados.json";

// Função auxiliar para ler dados do arquivo
const lerDados = () => {
  if (!fs.existsSync(DATA_FILE)) return { litros: 0, km: 0 };
  return JSON.parse(fs.readFileSync(DATA_FILE));
};

// Busca os dados
app.get("/status", (req, res) => {
  const dados = lerDados();
  res.json(dados);
});

// Atualiza e Salva
app.post("/update", (req, res) => {
  const { novaKm, novosLitros, tipoCombustivel } = req.body;
  const dadosAntigos = lerDados();

  const consumo = tipoCombustivel === "gasolina" ? 7 : 6;
  const kmAnterior = dadosAntigos.km || novaKm;

  const distanciaPercorrida = Math.max(0, novaKm - kmAnterior);
  const gasto = distanciaPercorrida / consumo;

  let litrosAtuais = Math.max(0, dadosAntigos.litros - gasto);
  litrosAtuais = Math.min(54, litrosAtuais + (parseFloat(novosLitros) || 0));

  const novosDados = { litros: litrosAtuais, km: novaKm };

  // Salva no arquivo físico
  fs.writeFileSync(DATA_FILE, JSON.stringify(novosDados));

  console.log(`Dados salvos no arquivo:`, novosDados);
  res.json({ litrosAtuais, novaKm });
});

app.listen(3000, () =>
  console.log("Servidor rodando com armazenamento local!"),
);
