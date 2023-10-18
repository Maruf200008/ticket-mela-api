// external import
const express = require('express')
const router = express.Router()
const {createUser} = require('../controllers/signinControllers')
const {adduserValidator, addUserValidationHandlar} = require('../middlewares/user/userValidator')


router.post("/", adduserValidator, addUserValidationHandlar, createUser)

module.exports = router


