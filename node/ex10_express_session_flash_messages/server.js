require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com a base de dados efetuada!");
    app.emit("dbConnection");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(routes);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.on("dbConnection", () => {
  app.listen(3000, () => {
    console.log("Server listening on port 3000");
    console.log("http://localhost:3000");
  });
});
