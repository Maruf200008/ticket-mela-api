const mongoose = require('mongoose');


// movies database
const db = mongoose.createConnection('mongodb+srv://mohammadmarufgazi:klD149njAQfGVrrn@cluster0.hygbszl.mongodb.net/movies?retryWrites=true&w=majority');


var MovieSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    catagory : {
        type : Array,
        required : true,
    },
    time : {
        type : String,
        required : true,
        trim : true,
    },
    poster : {
        type : String,
        required : true,
        trim : true,
    },
    trilarUrl : {
        type : String,
        required : true,
        trim : true,
    },
    shortDes : {
        type : String,
        required : true,
        trim : true,
    },
    Director : {
        type : Array,
        required : true,
    },
    Writers : {
        type : Array,
        required : true,
    },
    Stars : {
        type : Array,
        required : true,
    },
    TopCast : {
        type : Array,
        required : true,
    },
    StoryLine : {
        type : String,
        required : true,
    },
},
{
    timestamps : true
}
    
  );


const Movies = db.model("Movies", MovieSchema);

module.exports = Movies