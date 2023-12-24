const Movies = require("../models/Movies");

const upcommingMovies = async (req, res, next) => {
  try {
    const result = await Movies.find({ releaseDate: "True" }).select({
        name: 1,
        time: 1,
        catagory: 1,
        poster : 1,
        trilarUrl : 1
    });
    res.status(200).json({
      data: result,
    });
  } catch {
    res.status(500).json({
      error: "Somthing is rong!",
    });
  }
};

const inTheaterMovies = async (req, res, next) => {
  try {
    const result = await Movies.find({ inTheaterMovies: "True" }).select({
      name: 1,
      time: 1,
      catagory: 1,
      poster : 1,
      trilarUrl : 1
    });
    res.status(200).json({
      data: result,
    });
  } catch {
    res.status(500).json({
      error: "Somthing is rong!",
    });
  }
};

const moviesCatagories = async (req, res, next) => {
  console.log(req.params.catagorie);
  try {
    const result = await Movies.find({ catagory: req.params.catagorie }).select({
      name: 1,
      time: 1,
      catagory: 1,
      poster : 1,
      trilarUrl : 1,
      releaseDate : 1
    });
    res.status(200).json({
      data: result,
    });
  } catch {
    res.status(500).json({
      error: "Somthing is rong!",
    });
  }
};



const movieDetails = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const result = await Movies.find({ _id: req.params.id })
    res.status(200).json({
      data: result,
    });
  } catch {
    res.status(500).json({
      error: "Somthing is rong!",
    });
  }
};

const createMovies = async (req, res, next) => {
  try {
    const newMovies = await new Movies(req.body);
    const result = await newMovies.save();
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: "Somthing is server side rong!!",
    });
  }
};

module.exports = {
  upcommingMovies,
  inTheaterMovies,
  moviesCatagories,
  movieDetails,
  createMovies,
};
