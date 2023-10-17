// external import
const express = require('express');

// internal import 
const {getUser} = require('../controllers/userControllers');
const checkLogin = require('../middlewares/common/checkLogin')

const router = express.Router();


router.get("/", checkLogin, getUser);

module.exports = router;