const express = require('express');
const { Pool } = require('pg');
import {
  DATABASE,
  USER,
  PASSWORD,
  HOST
} from '../config';

const pool = new Pool({
  database: DATABASE,
  user: USER,
  password: PASSWORD,
  host: HOST,
  ssl: true,
});

const router = express.Router();

router.get('/books', (req, res) => {
  pool.query('SELECT * from books', [], (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

router.get('/books/:bookId/ratings', (req, res) => {
  pool.query(
    'SELECT * from reviews where book_id = $1',
    [req.params.bookId],
    (err, result) => {
      if (err) throw err;
      res.send(result.rows);
    });
})

export default router;