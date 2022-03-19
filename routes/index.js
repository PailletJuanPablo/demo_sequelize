var express = require('express');
var router = express.Router();
const db = require('../db/models');

const ModeloAlbum = db.Album;
const Movie = db.Movie;

/* GET home page. */
router.get('/', async (req, res, next) => {


  const movies = await Movie.findAll();
  return res.send(movies)


});

module.exports = router;
