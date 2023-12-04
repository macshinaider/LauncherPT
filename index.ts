import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;

// Diretório dos arquivos
const directoryPath = path.join(__dirname, "/Launcher");

// Servir arquivos estáticos
app.use(express.static(directoryPath));

// Rota para download de arquivo
app.get("/Launcher/:file(*)", function (req, res) {
  const file = `${directoryPath}/${req.params.file}`;
  res.download(file); // Configura o download do arquivo
});

app.get("/Launcher/Updates.xml", function (req, res) {
  const filePath = path.join(
    __dirname,
    "/Launcher/Updates.xml"
  );

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).send("Ocorreu um erro ao ler o arquivo");
    } else {
      res.type("application/xml");
      res.send(data);
    }
  });
});

app.get("/Launcher/arquivo.txt", function (req, res) {
    const filePath = path.join(__dirname, '/Launcher/arquivo.txt');
  
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        console.error(err);
        res.status(500).send('Ocorreu um erro ao ler o arquivo');
      } else {
        res.send(data);
      }
    });
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
