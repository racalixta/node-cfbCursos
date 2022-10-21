const mongodb = require('mongodb').MongoClient;

const url = "mongodb+srv://raCalixta:rafa1011@cluster0.vwwchlw.mongodb.net/?retryWrites=true&w=majority"

mongodb.connect(url, (erro, banco) => {
    if(erro) throw erro;

    const dbo = banco.db("cfbCursos");                   
    const colecao1 = "cursos2";
    const colecao2 = "detalhesCursos";

    // let obj = [
    //     {idCurso: 01, curso: "Curso de C++", canal: "CFB Cursos"},
    //     {idCurso: 02, curso: "Curso de HTML", canal: "CFB Cursos"},
    //     {idCurso: 03, curso: "Curso de CSS", canal: "CFB Cursos"},
    //     {idCurso: 04, curso: "Curso de JavaScript", canal: "CFB Cursos"},
    //     {idCurso: 05, curso: "Curso de PHP", canal: "CFB Cursos"},
    //     {idCurso: 06, curso: "Curso de Node", canal: "CFB Cursos"},
    //     {idCurso: 07, curso: "Curso de React", canal: "CFB Cursos"},
    //     {idCurso: 08, curso: "Curso de React Native", canal: "CFB Cursos"},
    //     {idCurso: 09, curso: "Curso de Arduino", canal: "CFB Cursos"},
    //     {idCurso: 10, curso: "Curso de Photoshop", canal: "CFB Cursos"},
    //     {idCurso: 11, curso: "Curso de AppInventor", canal: "CFB Cursos"},
    //     {idCurso: 12, curso: "Curso de Flash", canal: "CFB Cursos"},
    //     {idCurso: 13, curso: "Curso de Unity", canal: "CFB Cursos"},
    //     {idCurso: 14, curso: "Curso de C#", canal: "CFB Cursos"},
    //     {idCurso: 15, curso: "Curso de Java", canal: "CFB Cursos"},
    //     {idCurso: 16, curso: "Curso de Qt Creator", canal: "CFB Cursos"},
    //     {idCurso: 17, curso: "Curso de SQL", canal: "CFB Cursos"},
    //     {idCurso: 18, curso: "Curso de Python", canal: "CFB Cursos"},

    // ];

    // INSERT MANY - colecao1
    // dbo.collection(colecao1).insertMany(obj, async (erro, resultado) => {
    //     if(erro) throw erro;
    //     await console.log(resultado.insertedCount + " novo(s) curso(s) inserido(s)")
    //     // banco.close();
    // });


    // obj = [
    //     {idCurso: 01, aulas: 192},
    //     {idCurso: 02, aulas: 264},
    //     {idCurso: 03, aulas: 77},
    //     {idCurso: 04, aulas: 122},
    //     {idCurso: 05, aulas: 50},
    //     {idCurso: 06, aulas: 21},
    //     {idCurso: 07, aulas: 45},
    //     {idCurso: 08, aulas: 46},
    //     {idCurso: 09, aulas: 75},
    //     {idCurso: 10, aulas: 30},
    //     {idCurso: 11, aulas: 48},
    //     {idCurso: 12, aulas: 60},
    //     {idCurso: 13, aulas: 44},
    //     {idCurso: 14, aulas: 132},
    //     {idCurso: 15, aulas: 51},
    //     {idCurso: 16, aulas: 89},
    //     {idCurso: 17, aulas: 42},
    //     {idCurso: 18, aulas: 86},
    // ]

    // INSERT MANY - colecao2
    // dbo.collection(colecao2).insertMany(obj, async (erro, resultado) => {
    //     if(erro) throw erro;
    //     await console.log(resultado.insertedCount + " novo(s) curso(s) inserido(s)")
    //     // banco.close();
    // });


    // DELETE MANY

    // query = query = {curso: /C./}; 
    // dbo.collection(colecao1).deleteMany(query, async (erro, resultado) => {                 
    //     if(erro) throw erro;
    //     await console.log(resultado.deletedCount + ' curso(s) deletado(s)') // contando
    //     // banco.close();
    // });


    // FILTRANDO TODOS - colecao 1 e colecao2
    // let query = {};
    // dbo.collection(colecao1).find(query, {projection:{_id: 0}}).toArray((erro, resultado) => {                 
    //     if(erro) throw erro;
    //     console.log(resultado)
    //     // banco.close();
    // });

    // dbo.collection(colecao2).find(query, {projection:{_id: 0}}).toArray((erro, resultado) => {                 
    //     if(erro) throw erro;
    //     console.log(resultado)
    //     banco.close();
    // });


    // JOIN - listagem das duas colecoes 

    dbo.collection(colecao1).aggregate([
        {   $lookup: {
                from: 'detalhesCursos',
                localField: 'idCurso',
                foreignField: 'idCurso',
                as: 'Detalhes'
            }
        
        }
    ]).toArray((erro, resultado) => {                 
        if(erro) throw erro;
        console.log(JSON.stringify(resultado))
        banco.close();
    });


});



