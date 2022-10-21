const conectar = async () => {
    if(global.conexao && global.conexao.state !== 'disconnected') 
        return global.conexao
    
    const mysql = require('mysql2/promise');
    const con = await mysql.createConnection("mysql://root:rafa1011@127.0.0.1:3306/node_cfb");
    // const con = mysql.createConnection("mysql://root:rafa1011@localhost:3306/nodejs-cfb");
    console.log('Conectou ao banco');
    global.conexao = con;
    return con;
}

// SELECT
const todosClientes = async() => {
    const con = await conectar();
    const [linhas] = await con.query('SELECT * FROM cliente_node');
    return await linhas;
}

// INSERT
const insereCliente = async(cliente) => {
    const con = await conectar();
    const sql = 'INSERT INTO cliente_node (nome, idade) VALUES (?, ?)'
    const valores = [cliente.nome, cliente.idade]
    await con.query(sql, valores);
}


//update

const atualizaCliente = async(id, cliente) => {
    const con = await conectar();
    const sql = 'UPDATE cliente_node SET nome=?, idade=? WHERE id=?'
    const valores = [cliente.nome, cliente.idade, id]
    await con.query(sql, valores);
}

//delete

const deletaCliente = async(id) => {
    const con = await conectar();
    const sql = 'DELETE from cliente_node WHERE id=?'
    const valores = [id]
    await con.query(sql, valores);
}


module.exports = {todosClientes, insereCliente, atualizaCliente, deletaCliente}
