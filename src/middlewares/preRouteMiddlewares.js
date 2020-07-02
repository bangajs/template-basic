const express = require('express');
const morgan = require('morgan');
const cors = require("cors")
const passport = require("passport")

module.exports = (app) => {
     app.use(cors())
     app.use(morgan('dev'));
     app.use(express.json());
     app.use(express.urlencoded({ extended: false }));
     app.use(express.static("/public"));
     app.use('/uploads', express.static("/uploads"));
     app.use(passport.initialize());

     return app
}