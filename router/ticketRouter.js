// external import
const express = require('express')
const router = express.Router()
const checkLogin = require('../middlewares/common/checkLogin')

const {getTicket} = require('../controllers/ticketControllers')

router.get("/", checkLogin, getTicket)

module.exports = router


