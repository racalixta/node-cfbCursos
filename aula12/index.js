const http = require('http');
const porta = process.env.PORT || 3000;
const formidavel = require('formidable');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    if(req.url == '/envioDeArquivo') {

        const form = new formidavel.IncomingForm();

        form.parse(req, (erro, campos, arquivos) => {

            const urlAntiga = arquivos.filetoupload.filepath;
            console.log(urlAntiga)
            const urlNova = 'C:/Users/usuário/Desktop/' + arquivos.filetoupload.originalFilename;
            console.log(urlNova)

            fs.rename(urlAntiga, urlNova, (erro) => {
                if(erro) throw erro;
                res.write('Arquivo Movido');
                res.end();
            })

        });

    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data" >');
        res.write('<input type="file" name="filetoupload" > <br>');
        res.write('<input type="submit" value="Enviar" >');
        res.write('</form>');
    }




}); 


servidor.listen(porta, () => {console.log('rodando...')})
















