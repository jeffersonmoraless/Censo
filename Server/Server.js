const express = require("express");
const cors =require("cors")
const app = new express();

app.use(express.json());
app.use(cors())
module.exports = {
  app,
};
