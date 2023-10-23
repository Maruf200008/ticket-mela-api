// external import 
const express = require('express');
const passport = require('passport')

const router = express.Router();

router.get('/google/callback', passport.authenticate("google", {
    successRedirect : "/ticket",
    failureRedirect : "/login"
}))


router.get('login/success', (req, res) => {
    console.log(req)
    if(req.user) {
        res.status(200).json({
            message : "Login Sucessfully"
        })

    }else {
        res.status(403).json({
            message : "Not Authorized!!"
        })

    }
})

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        message : "Login Faile!"
    })
})

router.get("/google", passport.authenticate("google", {
    scope : ["profile", "email"]
}));

module.exports = router