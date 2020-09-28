require("express-async-errors");
const app = require("express")();
const PORT = process.env.PORT;

// Pre-route middlewares
require("./src/middlewares/pre-route.middleware")(app);

// API routes
app.use("/api", require("./src/routes"));

// Test route
app.get("/ping", (req, res) => res.status(200).send("Hello world!"));

// Error middlewares
require("./src/middlewares/error.middleware")(app);


app.listen(PORT, () => {
  //Initialize Database
  require("./src/configs/db.config")();
  console.log(`:::> Server listening on port ${PORT}. Open via http://localhost:${PORT}`);
});

app.on("error", (error) => {
  console.error(`<::: An error occiurred in our server: \n ${error}`);
});
