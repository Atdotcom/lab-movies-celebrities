const {Schema, model} = require('mongoose');
const movieSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  },
  cast: [{
    type: Schema.Types.OnjectId,
    ref: "Celebrity"  
  }]
});

const Movie = model('Movie', movieSchema);
module.exports = Movie;