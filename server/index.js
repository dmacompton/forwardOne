const express = require('express');
const cors = require('cors');
const app = express();
import serverRender from './render';
import apiRouter from './apiRouter';

app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get(['/', '/books/:bookId'], (req, res) => {
  serverRender(req.params.bookId).then((renderData) => {
    res.render('index', {
      markup: renderData.markup,
      initialData: renderData.data,
    });
  })
});

app.use('/api', apiRouter);


app.listen(8080, () => console.log('Server is running!'));