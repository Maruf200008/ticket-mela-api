const express = require('express');
const passport = require('passport')
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cors = require('cors');


const cookieParser = require('cookie-parser');
const {notFoundHandlar, errorHandlar} = require('./middlewares/common/errorHandlar')
require('./passport')



// router 
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const moviesRouter = require('./router/moviesRouter');
const signinRouter = require('./router/signInRouter');
const ticketRouter = require('./router/ticketRouter');
const googleRouter = require('./router/googleRoute');
const paymentRoute = require('./router/paymentRouter');



const app = express();
dotenv.config();

process.env.APP_NAME;



// request parses
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', methods : "GET, POST, PUT, DELETE", credentials: true }));
app.use(express.urlencoded({extended : true}));


// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


// routing setup
app.use("/login", loginRouter);
app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/register", signinRouter);
app.use("/ticket", ticketRouter);
app.use("/auth", googleRouter);
app.use("/payment", paymentRoute);





// 404 not found handaling 
app.use(notFoundHandlar);

// error handaling 
app.use(errorHandlar);


app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}  🚀🚀`)
})



