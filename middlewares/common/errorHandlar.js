const createError = require("http-errors");

// 404 not found handlar 
const notFoundHandlar = (req, res, next) => {
    next(createError(404, "Your requested content was not found!"));
}

// default error handlar 
const errorHandlar = (err, req, res, next) => {
    if (res.headersSent) {
        res.send('Something broke!')
      }else {
        res.status(500).send('Something broke!')
      }
    
}

module.exports = {
    notFoundHandlar,
    errorHandlar
}