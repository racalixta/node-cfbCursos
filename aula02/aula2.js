// http.cat -> site que mostra os retornos do serve

const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('CFB Cursos - Curso de Nodejs\n');
    response.end();
}).listen(1337);










