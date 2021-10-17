require('dotenv').config()
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

let message = "";
let message1 = "";
let message2 = "";
const cadastroLoja = [];
const cadastroProduto = [];
const quemSomos = [];
const cadastroCliente = [];


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded());

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index", {
    titulo: "Good Sales",
    cadastroLoja: cadastroLoja,
    cadastroProduto: cadastroProduto,
    quemSomos: quemSomos,
    message,
  })
});

app.get("/cadastro", (req, res) => {
  res.render("cadastroLoja");
});

app.get("/quemsomos", (req, res) => {
  res.render("quemSomos");
});

app.post("/new", (req, res) => {
  const {loja, categoria, logo, cnpj, contato, email} = req.body;
  const novaLoja = ({loja: loja, categoria: categoria, logo: logo, cnpj: cnpj, contato: contato, email: email});
  cadastroLoja.push(novaLoja);
  message1 = `A loja ${loja} foi cadastrada com sucesso!`;
  res.redirect("/");
});


app.post("/newproduto", (req, res) => {
  const {item, descricao, tamanho, imagem, valor} = req.body;
  const produto = ({item: item, descricao: descricao, tamanho: tamanho, imagem, imagem, valor: valor});
  cadastroProduto.push(produto);
  message2 = `Produto ${item} cadastrado com sucesso!`
  res.redirect("/");
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));