const http = require('http');
const fs = require('fs');
const porta = process.env.PORT;

const server = http.createServer((req, res) => {

    fs.appendFile('texte.txt', 'Curso de Node - teste appendFile',(err) => {
        if(err) throw err;
        console.log('arquivo criado');
    });

});

server.listen(porta || 3000, () => {console.log('Servidor rodando...')});
