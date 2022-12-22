const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const routes = require('./routes/routes');

app.use(express.json());
app.use(cors());

app.get('/', routes)

app.get('/correntista', routes)

app.get('/movimentacao',routes)

app.delete('/correntista/:id', routes)

app.post('/correntista', routes)

app.post('/deposito',routes)

app.post('/saque', routes)

app.post('/pagamento', routes)

app.post('/transferencia',routes)

app.get('/extrato/:codigo/:dataInicial/:dataFinal', routes)

app.get('/correntista/:id',routes)

app.get('/movimentacao/:id',routes)

app.put('/correntista/:id', routes)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`);
})