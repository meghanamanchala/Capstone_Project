const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const Auth = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

Auth.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

Auth.use(passport.initialize());
Auth.use(passport.session());

Auth.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"],prompt:"select_account" })
);

Auth.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    res.cookie('loggedIn', 'true');
    res.cookie('username', req.user.displayName); 
    res.redirect("http://localhost:5173/");
  }
);

module.exports = Auth;
