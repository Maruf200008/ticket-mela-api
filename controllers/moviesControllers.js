const Movies = require('../models/Movies');

const getMovies = (req, res, next) => {
    res.status(200).send("Hi i am a Movies Page");
}

const createMovies = async (req, res, next) => {
    try{
        const newMovies = await new Movies(req.body);
        const result = await newMovies.save();
        res.status(200).json({
            data : result
        })
        
    }catch(err) {
        res.status(500).json({
            error : "Somthing is server side rong!!" 
        })
    }
}

module.exports = {
    getMovies,
    createMovies
}