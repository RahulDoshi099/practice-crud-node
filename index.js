const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//coonect mongoose
mongoose
  .connect(
    "mongodb+srv://rahuldoshi:adminrahul@cluster0.yfbf0.mongodb.net/practice-crud-node?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("Database connected successfully!!!");
  });

app.use("/api/items", itemRoutes);

//port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` connected to port ${port} `);
});
