"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var fs_1 = require("fs");
var app = (0, express_1.default)();
var port = 3000;
// Diretório dos arquivos
var directoryPath = path_1.default.join(__dirname, "/Launcher");
// Servir arquivos estáticos
app.use(express_1.default.static(directoryPath));
// Rota para download de arquivo
app.get("/Launcher/:file(*)", function (req, res) {
    var file = "".concat(directoryPath, "/").concat(req.params.file);
    res.download(file); // Configura o download do arquivo
});
app.get("/Launcher/Updates.xml", function (req, res) {
    var filePath = path_1.default.join(__dirname, "/Launcher/Updates.xml");
    fs_1.default.readFile(filePath, "utf8", function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).send("Ocorreu um erro ao ler o arquivo!");
        }
        else {
            res.type("application/xml");
            res.send(data);
        }
    });
});
app.get("/Launcher/arquivo.txt", function (req, res) {
    var filePath = path_1.default.join(__dirname, "/Launcher/arquivo.txt");
    fs_1.default.readFile(filePath, "utf8", function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).send("Ocorreu um erro ao ler o arquivo");
        }
        else {
            res.send(data);
        }
    });
});
app.listen(port, function () {
    console.log("Servidor rodando em http://localhost:".concat(port));
});
