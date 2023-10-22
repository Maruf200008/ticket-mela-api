const express = require('express');
const passport = require('passport')
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cors = require('cors');

const cookieParser = require('cookie-parser');
const {notFoundHandlar, errorHandlar} = require('./middlewares/common/errorHandlar')
require('./auth')

// router 
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const moviesRouter = require('./router/moviesRouter');
const signinRouter = require('./router/signInRouter');
const ticketRouter = require('./router/ticketRouter');
const homeRouter = require('./router/homeRouter');


const app = express();
dotenv.config();

process.env.APP_NAME;

// database contection

mongoose.connect('mongodb://127.0.0.1:27017/users')
.then(() => console.log("Database Connect Successfully"))
.catch((err) => console.log(err));

// request parses
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
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
app.use("/home", homeRouter);



// google auth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.status(200).send("Hi all about ok")
  });

// 404 not found handaling 
app.use(notFoundHandlar);

// error handaling 
app.use(errorHandlar);


app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}  🚀🚀`)
})



