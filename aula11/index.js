const http = require('http')
const eventos = require('events');

const EventoEmissor = new eventos.EventEmitter();

EventoEmissor.on('msg', () => {console.log('Curso de node')});

const final = () => {console.log('Isso é tudo')}

EventoEmissor.on('fim', final)


const porta = process.env.PORT || 3000;

const retorno = () => {console.log('Rodando...')}

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/plain'});
    EventoEmissor.emit('msg');
    res.write('CFB Cursos');
    EventoEmissor.emit('fim');
    res.end();
})


servidor.listen(porta, retorno)





