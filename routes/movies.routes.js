// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");
// all your routes here


 router.get('/movies/create',async  (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('movies/new-movie', {celebrities});
    
  }
  catch (err) {
    console.log(err);
  }
 });

 router.post('/movies/create', async (req, res) => {
  try {
    const { title, genre, plot, cast} = req.body;
    const newMovie = await Movie.create({ title, genre, plot, cast});
    res.redirect('movies');
  }
  catch(err) {
    res.render('movies/new-movie');
    console.log(err);
  }
 });

 router.get('/movies/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render('movies/movies', {movies});
  }
  catch(err){
    console.log(err);
  }
 });
//  router.get('/create', async (req, res) => {
//   try {
//     const 
//   }
//  })

module.exports = router;