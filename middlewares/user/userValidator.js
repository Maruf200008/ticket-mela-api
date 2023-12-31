const { check, validationResult } = require('express-validator');
const User = require('../../models/People')
const createError = require("http-errors");

// add user
const adduserValidator = [
    check("name")
    .isLength({min : 1})
    .withMessage("Name is required")
    .isAlpha("en-US", {ignore : " -"})
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),
    check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
        try {
            const user = await User.findOne({email : value})
            if(user) {
                throw createError("Email already is use!")
            }
        }catch(err) {
            throw createError(err.message)
        }
    }),
    check("mobile")
    .isMobilePhone("bn-BD", {
        strictMode : true
    })
    .withMessage("Mobile number must be a valid Bangladeshi mobile number")
    .custom(async (value) => {
        try {
            const user = await User.findOne({mobile : value})
            if(user) {
                throw createError("Mobile already is use!")
            }
        }catch(err) {
            throw createError(err.message)

        }
    }),
    check("password")
    .isStrongPassword()
    .withMessage("Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbole")
];

const addUserValidationHandlar = (req, res, next) => {
    const error = validationResult(req)
    const mappedError = error.mapped()
    if(Object.keys(mappedError).length === 0) {
        next()
    }else {
        console.log(mappedError)
        res.status(500).json({
            error : mappedError
        })
    }

}

module.exports = {
    adduserValidator,
    addUserValidationHandlar
}
