const express = require('express');
const { Pool } = require('pg');
const pool = new Pool({
  database: 'books-dev',
});

const router = express.Router();

router.get('/books', (req, res) => {
  pool.query('SELECT * from books', [], (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

router.get('/books/:bookId/rating', (req, res) => {
  pool.query(
    'SELECT * from reviews where book_id = $1',
    [req.params.bookId],
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    });
})

export default router;