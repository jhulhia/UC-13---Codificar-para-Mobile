 const mysql = require('mysql2');
 const express = require('express');
 const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password  : 'root',
  database: 'controle_produtos'
});

 PORT = 3000;

 db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.get('/produtos', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    res.json(results);
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});