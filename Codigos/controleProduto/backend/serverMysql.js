 const mysql = require('mysql2');
 const express = require('express');
 const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password  : 'root',
  database: 'controle_produtos'
});

app.put("/produtos/:id", (req, res) => {
  const { nome, preco, estoque } = req.body;
  console.log("Recebendo PUT para ID:", req.params.id, req.body); // <-- LOG AQUI
  
  const sql = "UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?";
  db.query(sql, [nome, preco, estoque, req.params.id], (err) => {
    if (err) {
        console.error("Erro no PUT:", err); // <-- LOG AQUI
        return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Sucesso" });
  });
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

app.post('/produtos', (req, res) => {
  const { nome, preco, quantidade } = req.body;
  db.query('INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?)', [nome, preco, quantidade], (err, results) => {
    res.json(results);
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});