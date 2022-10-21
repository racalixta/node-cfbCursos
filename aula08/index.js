(async () => {
    const db = require('./db');

    // INSERT
    // console.log('Inserir novo cliente');
    // const novoCliente = {nome: 'Maria', idade: '32'}
    // await db.insereCliente(novoCliente);

    // UPDATE
    const id = 3;
    const atualizaCliente = {nome: 'Maria', idade: '54'}
    await db.atualizaCliente(id, atualizaCliente);
    console.log(`Cliente ${atualizaCliente} atualizado`);

    // DELETE
    // const idDel = 4;
    // await db.deletaCliente(id,);
    // console.log(`Cliente ${idDel} deleteado`);


    // SELECT
    console.log('Obter todos os clientes');
    const clientes = await db.todosClientes();
    console.log(clientes);
})();
