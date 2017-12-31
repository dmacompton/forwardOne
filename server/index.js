const express = require('express');
const cors = require('cors');
const app = express();
import serverRender from './render';
import apiRouter from './apiRouter';

app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: serverRender(),
  });
});

app.use('/api', apiRouter);


app.listen(8080, () => console.log('Server is running!'));