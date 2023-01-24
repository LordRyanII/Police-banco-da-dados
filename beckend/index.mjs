import express from "express";
// import fetch from 'node-fetch';

const app = express();

app.get('/', (req, res) =>{
    res.send()
})

app.listen(8000, ()=>{
    console.log('Aplicação rodando na porta 8000');
})