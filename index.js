require('express-async-errors')
const CustomError = require("./helpers/CustomError");
const http = require('http');
const app = require('express')();
const server = http.createServer(app);

const middlewares = require('./middlewares');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const databaseConfig = require('./config/db');
const port = process.env.PORT || 3030;

middlewares(app);

app.use('/api', routes())

app.use((req, res, next) => {
  throw new CustomError("Invalid request", 400);
});

app.use(errorHandler);

server.listen(port, () => {
  console.log(`:: server listening on port ${port}`);
  databaseConfig();
});

// server.on('error', (error) => { console.log(`:: error: ${error}`); });

