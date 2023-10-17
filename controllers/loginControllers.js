// external import 
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
// internal import 
const User = require('../models/People')


const getLogin = async (req, res, next) => {
    try {
        const user = await User.find({ name: req.body.name });
        if (user && user.length > 0) {
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
            if (isValidPassword) {
            // genarate web token
            const token = jwt.sign({
                userName : user[0]?.name,
                userId : user[0]?._id
            }, process.env.COOKIE_SECRET, {
                expiresIn : '1h'
            })

            res.status(200).json({
                "access_token" : token,
                "message" : "Login Sucessfull!!"
            })

            } else {
                res.status(401).json({
                    error: "Authentication Failed!!"
                });
            }
        } else {
            res.status(401).json({
                error: "Authentication Failed!!"
            });
        }
    } catch (error) {
        // Handle any potential errors, e.g., database query errors
        console.error("Error in login:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

module.exports = {
    getLogin
}