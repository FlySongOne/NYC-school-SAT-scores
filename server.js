const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const scoreRoutes = require ('./routes/score-routes');

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(logger('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message:"School Data for All New Yorkers"});
});

app.use('/scores', scoreRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
// Error handling
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
