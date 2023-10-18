var jwt = require('jsonwebtoken');


const checkLogin =  async (req, res, next) => {
    let cookie = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null
    if(cookie) {
        try {
            const token = cookie[process.env.COOKIE_NAME];
            const decode = await jwt.verify(token, process.env.JWT_SECRET)
            req.user = decode;
            next()
    
        } catch(err) {
            console.log(err)
            res.status(500).json({
                errors : {
                    common : {
                        msg : "Authentication failure!"
                    }
                }
            }); 
        }
    }else {
        res.status(401).json({
            errors : {
                common : {
                    msg : "Authentication failure!"
                }
            }
        }); 
        
    }
    
}

module.exports = checkLogin;