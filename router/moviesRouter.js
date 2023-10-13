// external import 
const express = require('express');

// internal import
const {getMovies, createMovies} = require('../controllers/moviesControllers')

const router = express.Router();

router.get("/", getMovies);
router.post("/", createMovies);

module.exports = router;

