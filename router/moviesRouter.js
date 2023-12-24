// external import 
const express = require('express');

// internal import
const {upcommingMovies, inTheaterMovies, createMovies, moviesCatagories, movieDetails} = require('../controllers/moviesControllers')

const router = express.Router();

router.get("/upcomming", upcommingMovies);
router.get("/inTheaters", inTheaterMovies);
router.get("/categories/:catagorie", moviesCatagories);
router.get("/detail/:id", movieDetails);

router.post("/", createMovies);

module.exports = router;

