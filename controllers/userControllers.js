

const getUser = (req, res, next) => {
    res.status(200).send("Hi i am a user Route");
}

module.exports = {
    getUser
}