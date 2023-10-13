// external import
const express = require('express');

// internal import 
const {getUser} = require('../controllers/userControllers');

const router = express.Router();


router.get("/", getUser);

module.exports = router;