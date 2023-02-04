const express = require("express");
const app = express();

//o que vier no body, esta em JSON
app.use(express.json())

//endpoint / -> foi
app.get("/", function (req, res) {
  res.send("hello world");
});

//endpoint /oi -> olá mundo!
app.get("/oi", function (req, res) {
  res.send("olá mundo");
});

// Lista de informação
const itensMercado = ["Arroz", "Feijão", "Sabão", "Pão", "Café"];
//                      0           1       2       3     4

// endpoint Read All -> [GET] /item
app.get("/item", function (req, res) {
  res.send(itensMercado);
});

// endpoint Read Single by ID -> [GET] /item:id
app.get("/item/:id", function (req, res) {
  const id = req.params.id;
  const item = itensMercado[id-1];
  res.send(item);
});

// endpoint Create -> [POST] /item
app.post("/item", function (req, res) {
  // console.log(req.body)
  const item = req.body;
  itensMercado.push(item.itemNovo);
  res.send("item criado com sucesso");
});

app.listen(3000);