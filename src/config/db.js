const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || "your mongo uri here"

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

module.exports = function initDB() {
  mongoose.connect(uri, options)
    .then(() => console.log(':: connected to database'))
    .catch(error => console.log(":: couldn't connect to database ", error));
};
