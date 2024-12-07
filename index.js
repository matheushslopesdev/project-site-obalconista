
//Configuração Servidor Express
const express = require('express')
const app = express()

// Configuração Variavel de Ambiente
require('dotenv').config()
const port = process.env.PORT || 3300

// Configuração de Rotas
const router = require('./routes/routes')

// Middlewares para json, e arquivos estaticos
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

// Configuração engine EJS
app.set('view engine', 'ejs');



// Setando Rotas
app.use(router)




app.listen(port, ()=>{
    console.log(`Rodando na http://localhost:${port}/`)
})