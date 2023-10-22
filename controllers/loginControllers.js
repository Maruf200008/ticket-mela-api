// external import 
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const createError = require("http-errors");

// internal import 
const User = require('../models/People')


const getLogin = async (req, res, next) => {
    try {
        const user = await User.findOne( {email: req.body.email});
        if (user && user?._id) {
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            if (isValidPassword) {
            // genarate web token
            const userObject = {
                userName : user.name,
                mobile : user.mobile,
                email : user.email,
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

            res.status(200).json({
                "access_token" : token,
                "message" : "Login Sucessfull!!"
            })

            } else {
                throw createError("Login failed! Please try again.")
              
            }
        } else {
            throw createError("Login failed! Please try again.")
        }
    } catch (err) {
        // Handle any potential errors, e.g., database query errors
        res.status(500).json({
            error : {
                common : {
                    msg : err.message
                }
            }
        }); 
    }
}

const logOut = async(req, res, next) => {
    res.clearCookie(process.env.COOKIE_NAME)
    res.json({
        message : "Logged Out"
    })
}
module.exports = {
    getLogin,
    logOut
}