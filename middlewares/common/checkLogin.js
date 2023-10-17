var jwt = require('jsonwebtoken');


const checkLogin =  async (req, res, next) => {
    const {authorization} = req.headers;
    try {
        const token = authorization.split(" ")[1];
        console.log(req.headers)
        console.log(token)
        const decode = await jwt.verify(token, process.env.COOKIE_SECRET)
        const {userName, userId} = decode;
        req.userName = userName;
        req.userId = userId;
        next()

    } catch(err) {
        console.log(err);
        next("Authentication Failuresdfasd!");
    }
    
}

module.exports = checkLogin;