const express = require('express');
const rotas = express.Router();

let cursosInfos = [
    {
        "Curso": "Node",
        "Info" : "Curso de Node"
    },
    {
        "Curso": "React",
        "Info" : "Curso de React"
    },
    {
        "Curso": "Angular",
        "Info" : "Curso de Angular"
    },
    {
        "Curso": "TailwindCSS",
        "Info" : "Curso de TailwindCSS"
    },
    {
        "Curso": "HTML",
        "Info" : "Curso de HTML"
    },
]



rotas.get('/', (req, res) => {
    res.json({ola: 'Seja bem vindo'})
});

rotas.get('/:cursoid', (req, res) => {
    const curso = req.params.cursoid;
    const cursoI = cursosInfos.find(i => i.Curso == curso);
    if(!cursoI) {
        res.status(404).json(
            {erro: 'Curso nao encontrado', cursoPesquisado: curso}
        );
    } else {
        res.status(200).json(cursoI);

    }

});

module.exports = rotas;





