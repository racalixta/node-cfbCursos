const mongodb = require('mongodb').MongoClient;

const url = "mongodb+srv://raCalixta:rafa1011@cluster0.vwwchlw.mongodb.net/?retryWrites=true&w=majority"

mongodb.connect(url, (erro, banco) => {
    if(erro) throw erro;

    const dbo = banco.db("cfbCursos");                     // banco 
    const obj = {curso: "HTML", canal: "CFB Cursos"}    // dados que será add na "tabela"
    const colecao = "cursos";

    // INSERT
    // dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
    //     if(erro) throw erro;
    //     console.log("Um novo curso foi inserido")
    //     banco.close();
    // });

    // INSERT MANY / CONTANDO
    // const obj2 = [
    //     {curso: "C++", canal: "CFB Cursos"}, 
    //     {curso: "C++", canal: "CFB Cursos"}, 
    //     {curso: "C++", canal: "CFB Cursos"}, 
    // ]
    // dbo.collection(colecao).insertMany(obj2, async (erro, resultado) => {
    //     if(erro) throw erro;
    //     await console.log(resultado.insertedCount + " novo(s) curso(s) inserido(s)")
    //     // banco.close();
    // });


    //  findOne                  {chave vazia} = SELECT * / porém por ser findOne retorna só 1
    // dbo.collection(colecao).findOne({canal: "CFB Cursos"}, (erro, resultado) => {
    //     if(erro) throw erro;
    //     console.log(resultado)
    //     banco.close();
    // });

    
    //  find          {chave vazia} = SELECT * 
    // dbo.collection(colecao).find({}).toArray((erro, resultado) => {
    // dbo.collection(colecao).find({canal: 'CFB Cursos'}, {projection:{_id: 0}}).toArray((erro, resultado) => {                       // projection => se irá mostrar ou não 0 = nao mostra
    //     if(erro) throw erro;
    //     console.log(resultado)
    //     console.log(resultado[0].curso)
    //     banco.close();
    // });


    //  QUERY 
    //const query = {curso: 'Node'};
    //const query = {curso: /.t/};  // usando expressão regular para acha os cursos q terminam com t
    // dbo.collection(colecao).find(query, {projection:{_id: 0}}).toArray((erro, resultado) => {                 
    //     if(erro) throw erro;
    //     console.log(resultado)
    //     banco.close();
    // });


    // SORT
    // const ordenacao = {curso: 1} // 1 = ordem crescente / -1 = ordem decrescente
    // const query = {};
    // dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro, resultado) => {                 
    //     if(erro) throw erro;
    //     console.log(resultado)
    //     banco.close();
    // });


    // DELETE
    // let query = {curso: "C++"};
    // // TAMBEM É POSSÌVEL DELETAR UTILIZANDO  EXPRESSÃO REGULAR

    // dbo.collection(colecao).deleteOne(query, (erro, resultado) => {                 
    //     if(erro) throw erro;
    //     console.log('1 curso foi deletado')
    //     // banco.close();
    // });

        // DELETE MANY
    // query = {curso: /.t/}; //usando expressão regular para deletar TDS os cursos q terminam com t
    // query = {curso: "C++"}; 
    // dbo.collection(colecao).deleteMany(query, async (erro, resultado) => {                 
    //     if(erro) throw erro;
    //     await console.log(resultado.deletedCount + ' curso(s) deletado(s)') // contando
    //     // banco.close();
    // });


    // UPDATE - Atualizando 
    // let query = {curso: "JavaScript"};
    // // TAMBEM É POSSÌVEL DELETAR UTILIZANDO  EXPRESSÃO REGULAR

    // let novoObj = {$set: {curso: 'JavaScript 2022'}};
    // dbo.collection(colecao).updateOne(query, novoObj, async (erro, resultado) => {                 
    //     if(erro) throw erro;
    //      await console.log(resultado.modifiedCount + ' curso(s) atualizado(s)')
    //     // banco.close();
    // });

    // updateMany
    // let query = {curso: "C++"};
    // novoObj = {$set: {curso: 'C++ 2022'}};
    // dbo.collection(colecao).updateMany(query, novoObj, async (erro, resultado) => {                 
    //     if(erro) throw erro;
    //      await console.log(resultado.modifiedCount + ' curso(s) atualizado(s)')
    //     // banco.close();
    // });



    // LIMITANDO A PESQUISA
    // const limite = 3;
    // query = {};
    // dbo.collection(colecao).find(query, {projection:{_id: 0}}).limit(limite).toArray((erro, resultado) => {                 
    //     if(erro) throw erro;
    //     console.log(resultado)
    //     banco.close();
    // });






    // FILTRANDO TODOS
    query = {};
    dbo.collection(colecao).find(query, {projection:{_id: 0}}).toArray((erro, resultado) => {                 
        if(erro) throw erro;
        console.log(resultado)
        banco.close();
    });





});



