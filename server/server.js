const express = require('express');
const path = require('path');
const ejs = require('ejs');
const compression = require('compression');
const app = new express();

const dist = path.join(__dirname, '../dist');
app.use(compression());
app.use(express.static(dist));

app.engine('html', ejs.__express);
app.set('views', dist);
app.set('view engine', 'html');

app.get('*', (req, res) => {
  res.render('index.html');
});


app.listen(4002, () => {
  console.info('localhost:4002');
});
