const express = require('express')
const app = express()
const conn = require('../database/connection')
const cors = require('cors');

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
      const queryStr = `DELETE FROM correntistas WHERE CodigoCorrentista = ${id}`
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
  
  app.post('/saque', (req, res) => {
    const codigo =  '\'' + req.body.CodigoCorrentista + '\'';
    const valor =  '\'' + req.body.Valor + '\'';
    conn.connect().then((pool) => {
      const queryStr = `EXEC spSaque ${codigo}, ${valor}`
      pool.query(queryStr).then((rows) => {
        res.status(201).send(rows.recordset)
      })
    })
  })
  
  app.post('/pagamento', (req, res) => {
    const codigo =  '\'' + req.body.CodigoCorrentista + '\'';
    const valor =  '\'' + req.body.Valor + '\'';
    conn.connect().then((pool) => {
      const queryStr = `EXEC spPagamento ${codigo}, ${valor}`
      pool.query(queryStr).then((rows) => {
        res.status(201).send(rows.recordset)
      })
    })
  })

   app.post('/transferencia', (req, res) => {
    const codigoOrigem = req.body.CodigoCorrentistaOrigem;
    const codigoDestino = req.body.CodigoCorrentistaDestino;
    const valor =  req.body.Valor;
    conn.connect().then((pool) => {
      pool.request()
        .input('CodigoCorrentistaOrigem', codigoOrigem)
        .input('CodigoCorrentistaDestino', codigoDestino)
        .input('Valor', valor)
        .execute(`spTransferencia`).then((rows) => {
          res.status(201).send(rows.recordset)
        })
    })
  })
 
  app.get('/extrato/:codigo/:dataInicial/:dataFinal', (req, res) => {
    const codigo =  req.params.codigo;
    const dataInicial = req.params.dataInicial;
    const dataFinal = req.params.dataFinal;
    conn.connect().then((pool) => {
      pool.request()
        .input('CodigoCorrentista', codigo)
        .input('DataInicial', dataInicial)
        .input('DataFinal', dataFinal)
        .execute(`spExtratoCorrentista`).then((rows) => {
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

  module.exports = app;