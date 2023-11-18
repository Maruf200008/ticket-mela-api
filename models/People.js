const mongoose = require('mongoose');


const db = mongoose.createConnection('mongodb+srv://mohammadmarufgazi:klD149njAQfGVrrn@cluster0.hygbszl.mongodb.net/peoples?retryWrites=true&w=majority');

const userSchema =  new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },
    mobile : {
        type : String,
    },
    password : {
        type : String,
        required : true,
    },
},
{
    timestamps : true
}
    
)

const People = db.model("People", userSchema);



module.exports = People