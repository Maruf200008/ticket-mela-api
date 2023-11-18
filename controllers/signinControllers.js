const People = require('../models/People')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const createUser =  async (req, res, next) => {
    try {
        const hashPassword =  await bcrypt.hash(req.body.password, 10);
  
        
    const newUser = new People({
        name : req.body.name,
        email : req.body.email,
        mobile : req.body.mobile,
        password : hashPassword
    })
    const userObject = {
        userName : req.body.name,
        mobile : req.body.mobile,
        email : req.body.email,
    }
    const token = jwt.sign(userObject, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRY
    })

    // set cookie
    res.cookie(process.env.COOKIE_NAME, token, {
        maxAge : process.env.JWT_EXPIRY,
        httpOnly : true,
        signed : true
    })
   
    const result = await newUser.save()

    res.status(200).json({
        data : result,
        "access_token" : token,
    });
  
    
   
    }catch(err) {
        console.log(err)
        res.status(500).json({
            errors : {
                common : {
                    msg : "Unknown error occured!"
                }
            }
        }); 
    }
    
}

module.exports = {
    createUser
}