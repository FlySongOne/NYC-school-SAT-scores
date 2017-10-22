// import express
const express = require('express');
// invoke scoreRouter
const scoreRoutes = express.Router();
// import score controller module
const scoresController = require('../controllers/scores-controller');

//get, post, put,delete requests from server and call controller
// get request , calling controller.index function
scoreRoutes.get('/', scoresController.index);
// post request that creates a new item
scoreRoutes.post('/', scoresController.create);

scoreRoutes.get('/add', (req, res) => {
   res.render('scores/scores-add');
});
// get and put requests that edit and update item
scoreRoutes.get('/edit/:id', scoresController.edit);
scoreRoutes.put('/:id', scoresController.update);

scoreRoutes.get('/:id', scoresController.show);

// delete request that delete item
scoreRoutes.delete('/:id', scoresController.delete);

//exporting the router module
module.exports = scoreRoutes;
