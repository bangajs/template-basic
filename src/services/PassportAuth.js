const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./../models/User');
const { PORT, FB_CLIENT_ID, FB_CLIENT_SECRET, GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID } = process.env;


const facebook = passport.use(new FacebookStrategy({
     clientID: FB_CLIENT_ID,
     clientSecret: FB_CLIENT_SECRET,
     callbackURL: `http://localhost:${PORT}/auth/facebook/callback`
},
     function (accessToken, refreshToken, profile, done) {
          User.findOrCreate({ name: profile.displayName }, { name: profile.displayName, userid: profile.id }, function (err, user) {
               if (err) { return done(err); }
               done(null, user);
          });
     }
));

const google = passport.use(new GoogleStrategy({
     clientID: GOOGLE_CLIENT_ID,
     clientSecret: GOOGLE_CLIENT_SECRET,
     callbackURL: `http://localhost:${PORT}/auth/google/callback`
},
     function (accessToken, refreshToken, profile, done) {
          User.findOrCreate({ userid: profile.id }, { name: profile.displayName, userid: profile.id }, function (err, user) {
               return done(err, user);
          });
     }
));

module.exports = {
     facebook,
     google
};