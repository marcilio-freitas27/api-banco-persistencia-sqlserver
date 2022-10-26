const express = require('express')
const app = express()
const port = 5000
const mssql = require('mssql/msnodesqlv8');
const cors = require('cors');

app.use(express.json());
// app.use(express.urlencode())

app.use(cors());

const conn = new mssql.ConnectionPool({
    driver: "msnodesqlv8",
    server: 'localhost',
    password: '',
    database: 'WebBackEnd',
    user: 'sa',
    password: 'Sql2@19'
})


app.get('/con', (req,res) => {
  try{
    if(conn){
      res.status(200).send('Conectado');
    }
  }catch(e){
    res.status(404).send(`Falha ao conectar. ${e.message}`);
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cliente', (req, res) => {
  conn.connect().then((pool) => {
    const queryStr = 'SELECT * FROM Clientes'
    // const queryStr = 'SELECT * FROM produto'
    pool.query(queryStr).then((rows) => {
      res.send(rows.recordset)
    })
  })
})

app.delete('/cliente/:id', (req, res) => {
  conn.connect().then((pool) => {
    const id = req.params.id;
    const queryStr = `DELETE FROM Clientes WHERE Codigo = ${id}`
    // const queryStr = 'SELECT * FROM produto'
    pool.query(queryStr).then((rows) => {
      res.status(204).send('ok')
    })
  })
})

app.post('/cliente', (req, res) => {
  const {
    codigo,
    nome,
    email
  } = req.body;
  conn.connect().then((pool) => {
    const queryStr = `INSERT INTO Clientes (Codigo, Nome, Email) VALUES(${codigo}, ${nome}, ${email})`
    // const queryStr = 'SELECT * FROM produto'
    pool.query(queryStr).then((rows) => {
      res.status(201).send(rows.recordset)
    })
  })
})

app.get('/cliente/:id', (req, res) => {
  const id = req.params.id;
  conn.connect().then((pool) => {
    const queryStr = `SELECT * FROM Clientes WHERE Codigo = ${id}`
    // const queryStr = 'SELECT * FROM produto'
    pool.query(queryStr).then((rows) => {
      if(rows.recordset.length > 0){
        res.send(rows.recordset[0]);
      }else {
        res.send(404).status(rows.recordset);
      }
    })
  })
})

app.put('/cliente/:id', (req, res) => {
  const codigo = req.params.id;
  const {
    nome,
    email
  } = req.body;
  conn.connect().then((pool) => {
    const queryStr = `UPDATE Clientes SET Codigo = ${codigo},
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