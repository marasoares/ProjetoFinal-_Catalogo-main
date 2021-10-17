require('dotenv').config()
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

let message = "";
let message1 = "";
let message2 = "";
let message3 = "";

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

app.post("/cadastro", (req, res) => {
  res.render("cadastroLoja");
  message;
});

app.get("/quemsomos", (req, res) => {
  res.render("quemSomos");
});

app.post("/cadastrocliente", (req, res) => {
  const {nome, sobrenome, cpf, endereco, numero, complemento, bairro, cidade, uf, cep, email} = req.body;
  const novoCliente = ({nome: nome, sobrenome: sobrenome, cpf: cpf, endereco: endereco, numero: numero, complemento: complemento, bairro: bairro, cidade: cidade, uf: uf, cep: cep, email: email});
  cadastroCliente.push(novoCliente);
  message3 = `Olá, ${nome}! Seu cadastro foi realizado com sucesso! `
  res.redirect("/");
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