# Take

Este repositório é um projeto de um chatbot feito para a empresa Take, utilizando uma API feita em express, onde é listado os 5 repositórios mais antigos da empresa que utilizam a linguagem C#.

## Sobre a API
A API é construida em NodeJS utilizando Exppress. Trata-se de uma pequena aplicação onde é feita uma requisição para a API do GitHub e os dados são filtrados e ordenados.
Para acessa-la, não é necessário instalar nada em sua máquina, basta fazer um requisição para o link abaixo:
http://takenet-api.herokuapp.com/.

Caso ainda assim queira instalar e rodar localmente. Basta clonar o repositório e rodar o comando

```
npm install
```
para instalar as dependências, e depois roda-la com o comando   
```
npm run dev
```
Ela irá ficar rodando na porta 3000
para acessa-la basta entrar no endereço localhost:3000

## Sobre o Bot
O Bot foi construido no portal da Take e seu fluxo está em um arquivo JSON de nome lorabot.json que está localizado no diretório "flow"
