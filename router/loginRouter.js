// external import 
const express = require('express');

// internal import 
const {getLogin} = require('../controllers/loginControllers');

const router = express.Router();

// login page
router.post("/", getLogin);

module.exports = router;