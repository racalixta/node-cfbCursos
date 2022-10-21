const express = require('express');
const app = express();
const porta = process.env.PORT;

// const servidor = http.createServer((req, res) => {
    // res.statusCode = 200;
//     res.writeHead(200, {'Content-Type':'text-plain'});
//     res.end('cfb Cursos para exemplo lorem ipsum')


// });

app.get('/', (req, res) => {
    res.send('Seja bem vindo')
})
app.get('/canal', (req, res) => {
    res.json({canal: 'cfbCursos node + express'})
})

app.listen(porta || 3000, () => {console.log('Servidor rodando...')})





