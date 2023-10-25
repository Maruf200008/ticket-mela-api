// external import 
const express = require('express');
const router = express.Router();

const {order} = require('../controllers/paymentControllers') 
const {paymentValidationHandlar, paymentValidator} = require('../middlewares/payment/paymentValidator') 


// login page
router.post("/", paymentValidator, paymentValidationHandlar,  order);


module.exports = router;