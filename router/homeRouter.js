// external import
const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/common/checkLogin')

const {getHome} = require('../controllers/ticketControllers')

router.get("/", checkLogin, getHome)

module.exports = router


