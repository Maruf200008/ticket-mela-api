const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

const passport = require('passport')

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope : ["profile", "email"]
  },
  function(accessToken, refreshToken, profile, cb) {
    // cb(null, profile)
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
  })
  
  passport.deserializeUser((user, done) => {
    done(null, user)
  })