const express = require('express')
const app = express()
const port = 5000
const mssql = require('mssql/msnodesqlv8');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const conn = new mssql.ConnectionPool({
    // driver: "msnodesqlv8",
    // server: 'localhost',
    // database: 'DEVCORP',
    // user: 'sa',
    // password: 'Sql2@19'
    driver: "msnodesqlv8",
    server: 'SISTEMA-SSD\\SQLEXPRESS',
    database: 'DEVCORP2',
    user: 'sa',
    password: '_43690'
})


app.get('/', (req,res) => {
  try{
    if(conn){
      res.status(200).send('Conectado');
    }
  }catch(e){
    res.status(404).send(`Falha ao conectar. ${e.message}`);
  }
})

app.get('/correntista', (req, res) => {
  conn.connect().then((pool) => {
    const queryStr = 'SELECT * FROM correntistas'
    pool.query(queryStr).then((rows) => {
      res.send(rows.recordset)
    })
  })
})

app.get('/movimentacao', (req, res) => {
  conn.connect().then((pool) => {
    const queryStr = 'SELECT * FROM movimentacoes'
    pool.query(queryStr).then((rows) => {
      res.send(rows.recordset)
    })
  })
})

app.delete('/correntista/:id', (req, res) => {
  conn.connect().then((pool) => {
    const id = req.params.id;
    const queryStr = `DELETE FROM correntistas WHERE Codigo = ${id}`
    pool.query(queryStr).then((rows) => {
      res.status(204).send('ok')
    })
  })
})

app.post('/correntista', (req, res) => {
    const nome =  '\'' + req.body.NomeCorrentista + '\'';
    const email =  '\'' + req.body.Email + '\'';
    const saldo =  '\'' + req.body.Saldo + '\'';
  conn.connect().then((pool) => {
    const queryStr = `INSERT INTO correntistas (NomeCorrentista, Email, Saldo) VALUES(${nome}, ${email}, ${saldo})`
    pool.query(queryStr).then((rows) => {
      res.status(201).send(rows.recordset)
    })
  })
})

app.post('/deposito', (req, res) => {
  const codigo =  '\'' + req.body.CodigoCorrentista + '\'';
  const valor =  '\'' + req.body.Valor + '\'';
  conn.connect().then((pool) => {
    const queryStr = `EXEC spDeposito ${codigo}, ${valor}`
    pool.query(queryStr).then((rows) => {
      res.status(201).send(rows.recordset)
    })
  })
})

app.get('/correntista/:id', (req, res) => {
  const id = req.params.id;
  conn.connect().then((pool) => {
    const queryStr = `SELECT * FROM correntistas WHERE CodigoCorrentista = ${id}`
    pool.query(queryStr).then((rows) => {
      if(rows.recordset.length > 0){
        res.send(rows.recordset[0]);
      }else {
        res.send(404).status(rows.recordset);
      }
    })
  })
})

app.get('/movimentacao/:id', (req, res) => {
  const id = req.params.id;
  conn.connect().then((pool) => {
    const queryStr = `SELECT * FROM Movimentacoes WHERE CodigoMovimentacao = ${id}`
    pool.query(queryStr).then((rows) => {
      if(rows.recordset.length > 0){
        res.send(rows.recordset[0]);
      }else {
        res.send(404).status(rows.recordset);
      }
    })
  })
})

app.put('/correntista/:id', (req, res) => {
  const codigo = req.params.id;
  const {
    nome,
    email
  } = req.body;
  conn.connect().then((pool) => {
    const queryStr = `UPDATE correntista SET Codigo = ${codigo},
    Nome = ${nome}, Email = ${email} WHERE Codigo = ${codigo}`
    pool.query(queryStr).then((rows) => {
      if(rows.recordset.length > 0){
        res.send(rows.recordset[0]);
      }else {
        res.send(404).status(rows.recordset);
      }
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`);
})