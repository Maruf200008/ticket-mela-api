const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const {notFoundHandlar, errorHandlar} = require('./middlewares/common/errorHandlar')

// router 
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const moviesRouter = require('./router/moviesRouter');
const signinRouter = require('./router/signInRouter');
const ticketRouter = require('./router/ticketRouter');

const app = express();
dotenv.config();

process.env.APP_NAME;

// database contection

mongoose.connect('mongodb://127.0.0.1:27017/users')
.then(() => console.log("Database Connect Successfully"))
.catch((err) => console.log(err));

// request parses
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


// routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/signIn", signinRouter);
app.use("/ticket", ticketRouter);



// 404 not found handaling 
app.use(notFoundHandlar);

// error handaling 
app.use(errorHandlar);


app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}  🚀🚀`)
})



