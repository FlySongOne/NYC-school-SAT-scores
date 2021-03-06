// model
// create instance of db configuration
const db = require('../db/config');
//creating an empty object Score
const Score = {};

// using Score object, create a table and manipulate a table.
Score.findAll = () => {
  return db.query('SELECT * FROM scores');
}
// method to create an item in a list
Score.create = (scores) => {
   return db.one(`
     INSERT INTO scores
     (school_name, num_taken, reading, math, writing)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *
   `, [ scores.school_name, scores.num_taken, scores.reading, scores.math, scores.writing]);
 }
// method to update an item in a list
Score.update = (scores, id) => {
  return db.one(`
     UPDATE scores SET
     school_name = $1,
     num_taken = $2,
     reading = $3,
     math = $4,
     writing = $5
     WHERE id = $6
     RETURNING *
   `, [scores.school_name, scores.num_taken, scores.reading, scores.math, scores.writing, id]);
 }

// method to find an item by id
Score.findById = (id) =>{
  return db.oneOrNone(
    `
      SELECT * FROM scores
      WHERE id = $1
    `,[id]);
}

// method to destroy one item by id
Score.destroy = (id) => {
   return db.none(`
     DELETE FROM scores
     WHERE id = $1
   `, [id]);
}

module.exports = Score;
