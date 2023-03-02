// import fetch from 'node-fetch';
import express from "express";
import path from 'path'
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.use(express.static(path.join(__dirname,'FRONT-END')));

app.listen(8000, ()=>{
    console.log('Aplicação rodando na porta 8000');
});