const People = require('../models/People')
const bcrypt = require('bcrypt');


const createUser =  async (req, res, next) => {
    try {
        const hashPassword =  await bcrypt.hash(req.body.password, 10);
  
        console.log(hashPassword)
    const newUser = new People({
        name : req.body.name,
        email : req.body.email,
        mobile : req.body.mobile,
        password : hashPassword
    })
    const result = await newUser.save()
    console.log(result)
    res.status(200).json({
        data : result
    });
  

    
   
    }catch(err) {
        console.log(err)
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