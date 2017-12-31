const express = require('express');
const db = require('./db');
const app = express();
import serverRender from './render';

app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: serverRender(),
  });
});


app.listen(8080, () => console.log('Server is running!'));