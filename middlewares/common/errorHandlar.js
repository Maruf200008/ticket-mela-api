const createError = require("http-errors");

// 404 not found handlar 
const notFoundHandlar = (req, res, next) => {
    next(createError(404, "Your requested content was not found!"));
}

// default error handlar 
const errorHandlar = (err, req, res, next) => {
    if (res.headersSent) {
        res.json({
          error :  'Something broke!'
        })
      }else {
        res.status(500).json({
          error : err
        })
      }
    
}

module.exports = {
    notFoundHandlar,
    errorHandlar
}