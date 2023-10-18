// external import 
const express = require('express');

// internal import 
const {getLogin, logOut} = require('../controllers/loginControllers');

const router = express.Router();

// login page
router.post("/", getLogin);
router.delete("/", logOut);

module.exports = router;