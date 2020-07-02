const router = require("express").Router();
const passport = require("../services/PassportAuth")


//  Facebook 
router.get('/facebook', passport.facebook.authenticate('facebook'));

router.get('/facebook/callback', passport.facebook.authenticate('facebook', { failureRedirect: '/login' }),
     function (req, res) {
          // Successful authentication, redirect home.
          res.redirect('/');
     });

//  Google
router.get('/google', passport.google.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

router.get('/google/callback', passport.google.authenticate('google', { failureRedirect: '/login' }),
     function (req, res) {
          res.redirect('/');
     });



module.exports = router