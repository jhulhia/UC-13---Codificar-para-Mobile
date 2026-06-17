 const mysql = require('mysql2');
 const express = require('express');
 const app = express();

// middleware para interpretar JSON no corpo das requisições
app.use(express.json());

 // ✅ CORS manual - antes de tudo
 app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
   if (req.method === "OPTIONS") {
     return res.sendStatus(204);
   }
   next();
 });
 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password  : 'root',
  database: 'controle_produtos'
});


const PORT = 3000;

 db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.get('/produtos', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      console.error('Erro ao consultar produtos:', err);
      return res.status(500).json({ error: err.message || err });
    }
    res.json(results);
  });
});

app.post('/produtos', async (req, res) => {
    console.log('Recebendo requisição POST /produtos com body:', req.body);
    try {
        const { nome, preco, estoque } = req.body;
        const conn = db.promise();
        const [result] = await conn.execute(
            'INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)',
            [nome, preco, estoque]
        );
        const insertedId = result.insertId;
        const [rows] = await conn.execute('SELECT * FROM produtos WHERE id = ?', [insertedId]);
        res.status(201).json(rows[0] || { id: insertedId, nome, preco, estoque });
    } catch (err) {
        console.error('Erro ao adicionar produto:', err);
        res.status(500).json({ error: err.message || err });
    }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});