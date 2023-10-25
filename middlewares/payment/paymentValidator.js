const { check, validationResult } = require('express-validator');


const paymentValidator = [
    check("name")
    .isLength({min : 1})
    .withMessage("Name is required")
    .isAlpha("en-US", {ignore : " -"})
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),
    check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim(),
    check("mobile")
    .isMobilePhone("bn-BD", {
        strictMode : true
    })
    .withMessage("Mobile number must be a valid Bangladeshi mobile number")

];

const paymentValidationHandlar = (req, res, next) => {
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
    paymentValidator,
    paymentValidationHandlar
}
