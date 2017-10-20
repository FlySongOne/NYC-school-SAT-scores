// controller
// import model
const Score = require('../models/scores');
//declare an empty scoresController object
const scoresController = {};

//using scoreController object, call functions
scoresController.index = (req, res) => {
  Score.findAll()
    .then(scores => {
        res.render('scores/scores-index',{
        message: 'ok',
        data: scores,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

scoresController.create = (req, res) => {
   Score.create({
     school_name: req.body.school_name,
     num_taken: req.body.num_taken,
     reading: req.body.reading,
     math: req.body.math,
     writing: req.body.writing
   }).then(score => {
     res.redirect('/scores');
   }).catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
};

scoresController.edit = (req, res) => {
  Score.findById(req.params.id)
    .then(score => {
      res.render('scores/scores-edit', {
        data: score,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

scoresController.update = (req, res) => {
   Score.update({
     school_name: req.body.school_name,
     num_taken: req.body.num_taken,
     reading: req.body.reading,
     math: req.body.math,
     writing: req.body.writing,
   }, req.params.id).then(score => {
     res.redirect('/scores');
   }).catch(err => {
     console.log(err);
     res.status(500).json(err);
   })
};

scoresController.show = (req,res) => {
   Score.findById(req.params.id)
   .then(scores =>{
      res.render('scores/scores-single',{
         message:'ok',
         data: scores,
      });
   }).catch(err=>{
      console.log(err);
      res.status(500).json(err);
   })
};

scoresController.delete = (req, res) => {
   Score.destroy(req.params.id)
     .then(() => {
       res.redirect('/scores');
     }).catch(err => {
       console.log(err);
      res.status(500).json(err);
     });
};



module.exports = scoresController;
