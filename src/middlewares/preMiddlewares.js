const express = require('express');
const morgan = require('morgan');
const morgan = require("cors")

module.exports = (app) => {
     app.use(cors())
     app.use(morgan('dev'));
     app.use(express.json());
     app.use(express.static("/public"));
     app.use('/uploads', express.static("/uploads"));
     app.use(express.urlencoded({ extended: false }));

     return app
}