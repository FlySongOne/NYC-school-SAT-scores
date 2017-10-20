// setting up router
const express = require('express');
const scoreRoutes = express.Router();
const scoresController = require('../controllers/scores-controller');

//get, post, put,delete requests from server and call controller
scoreRoutes.get('/', scoresController.index);

scoreRoutes.post('/', scoresController.create);

scoreRoutes.get('/add', (req, res) => {
   res.render('scores/scores-add');
});

scoreRoutes.get('/edit/:id', scoresController.edit);
scoreRoutes.put('/:id', scoresController.update);

scoreRoutes.get('/:id', scoresController.show);
scoreRoutes.delete('/:id', scoresController.delete);

module.exports = scoreRoutes;
