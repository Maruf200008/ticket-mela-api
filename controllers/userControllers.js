const User = require('../models/People')

const getUser =  async (req, res, next) => {
     const user = await User.find({name : "Mohammad Maruf"})
    .select({
        _id : 0,
        createdAt : 0,
        updatedAt : 0,
        __v : 0
    })
    res.status(200).send(user);
}

module.exports = {
    getUser
}