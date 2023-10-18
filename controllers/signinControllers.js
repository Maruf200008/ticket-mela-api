const People = require('../models/People')
const bcrypt = require('bcrypt');


const createUser =  async (req, res, next) => {
    try {
        const hashPassword =  await bcrypt.hash(req.body.password, 10);
    const newUser = new People({
        name : req.body.name,
        email : req.body.email,
        mobile : req.body.mobile,
        password : hashPassword
    })
    const result = await newUser.save()
    res.status(200).send(result); 
    console.log(result)
    }catch(err) {
        res.status(500).json({
            errors : {
                common : {
                    msg : "Unknown error occured!"
                }
            }
        }); 
    }
    
}

module.exports = {
    createUser
}