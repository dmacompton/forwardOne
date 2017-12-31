
const { Pool } = require('pg');
const pool = new Pool({
  database: 'books-dev',
});

pool.connect((err, client, done) => {
  if (err) throw err;
  pool.query('SELECT * from books', [], (err, result) => {
    if (err) throw err;
    console.log(result.rows);
    pool.end((err) => { if (err) throw err; });
  });
});