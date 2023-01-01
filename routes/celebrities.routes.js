// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities/create', (req, res) => {
  res.render('celebrities/new-celebrity');
});

router.post('/celebrtities/create', async (req, res) => {
  try {
    const { name, occupation, catchPhrase} = req.body;

    const newCelebrity = await Celebrity.create({ name, occupation, catchPhrase});
    res.redirect('celebrities');
  }
  catch(err) {
    res.render('celebrities/new-celebrity');
    console.log(err);
  }
});
router.get('/celebrities/celebrities', async (req, res) => {
  try {
      const celebrities = await Celebrity.find();
      res.render('celebrities/celebrities', { celebrities });
  } catch(err) {
      console.log(err);
  }
});

module.exports = router;