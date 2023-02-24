const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

//localhost ou 127.0.0.1
// const DB_URL = "mongodb://127.0.0.1:27017";
const DB_URL = "mongodb+srv://admin:rFQC5GjCRJwwOmnH@cluster0.mbkfjov.mongodb.net";
const DB_NAME = "ocean-bancodados-09-02-2023"; 

async function main() {

//conexão com o banco de dados
console.log("Conectando com o banco de dados...");
const client = await MongoClient.connect(DB_URL);
const db = client.db(DB_NAME);
const collection = db.collection("itens");
console.log("Banco de dados conectado com sucesso!");

const app = express();

//Habilita o cors
app.use(cors());

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
app.get("/item", async function (req, res) {
  const documentos = await collection.find().toArray();
  res.send(documentos);
});

// endpoint Read Single by ID -> [GET] /item:id
app.get("/item/:id", async function (req, res) {
  const id = req.params.id;
  const item = await collection.findOne({ _id: new ObjectId(id) });
  res.send(item);
});

// endpoint Create -> [POST] /item
app.post("/item", async function (req, res) {
  // console.log(req.body)
  const item = req.body;
  await collection.insertOne(item)
  res.send(item);
});

// endpoint Update -> [PUT] /item/:id
//put atuliza tudo, patch atualiza só uma parte
app.put("/item/:id", async function (req, res) {
  // console.log(req.body)
  const id = req.params.id;
  const body = req.body;
  // console.log(id, body);
  await collection.updateOne(
    {_id: new ObjectId(id)},
    { $set: body }
  );
  res.send("deu bom!");
});

//Endpoint  Delete - [DELETE] /item/:id
app.delete("/item/:id", async function (req, res) {
  const id = req.params.id;
  await collection.deleteOne({_id: new ObjectId(id)});
  res.send("Item removido com sucesso ");
});

 const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Servidor rodando na porta: " + port);
});
}
main(); 

/*    banco de dados U.u
admin
rFQC5GjCRJwwOmnH
mongodb+srv://admin:rFQC5GjCRJwwOmnH@cluster0.mbkfjov.mongodb.net
*/

/* JSON 
  object {}
  {
    "chave": "valor" | number | boolean | [array] | {object}
    "array": [
      "tal"
    ],
    object: {
      0: "tal"
    }
  }
*/