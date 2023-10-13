const getMovies = (req, res, next) => {
    res.status(200).send("Hi i am a Movies Page");
}

const createMovies = (req, res, next) => {
    res.status(200).send("Hi i am a Movies Page");
}

module.exports = {
    getMovies,
    createMovies
}