// external import
const express = require('express')
const router = express.Router()
const {createUser} = require('../controllers/signinControllers')

router.post("/", createUser)

module.exports = router


