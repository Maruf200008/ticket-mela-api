

const dotenv = require('dotenv');
const SSLCommerzPayment = require('sslcommerz-lts')
const { v4: uuidv4 } = require('uuid');

dotenv.config();


const store_id = process.env.SSL_STORE_ID
const store_passwd = process.env.SSL_STORE_PASSWORD
const is_live = false //true for live, false for sandbox

const order = async(req, res, next) => {
    const tra_id = uuidv4(); 

    const data = {
        total_amount: req.body.totalAmount,
        currency: 'BDT',
        tran_id: tra_id, // use unique tran_id for each api call
        success_url: 'http://localhost:3030/success',
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Movie Ticket',
        product_category: 'Ticket',
        product_profile: 'general',
        cus_name: req?.body.name,
        cus_email: req?.body.email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: req.body.mobile,
        cus_fax: '01711111111',
        ship_name: req?.body.name,
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    console.log(data)
    console.log(store_id)
    console.log(store_passwd)

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {
        // Redirect the user to payment gateway
        console.log(apiResponse)

        let GatewayPageURL = apiResponse.GatewayPageURL
        if(GatewayPageURL) {
            res.status(200).json({url : GatewayPageURL})
        }else {
            res.status(500).json({err : "Somthing is rong"})
        }
        
      
    });
}
module.exports = {
    order
}