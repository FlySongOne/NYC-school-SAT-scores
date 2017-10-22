// Node & Express server.js setup
// imports
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const scoreRoutes = require ('./routes/score-routes');

// create instance of express in app variable
const app = express();


// Port set up with listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// express middleware to reference statis public folder for styling
app.use(express.static('public'));
// set up method-override
app.use(methodOverride('_method'));
// set up logger middleware
app.use(logger('dev'));

//configure views to folder to set views engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
// index route
app.get('/', (req, res) => {
  res.render('index', { message:"School Data for All New Yorkers"});
});
// score route
app.use('/scores', scoreRoutes);


// Error handling
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
