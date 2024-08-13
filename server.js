const express = require("express");
const cors = require("cors");
const app = express();

function start() {
  app.use(cors());
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(3000, () => {
    console.log("Servidor rodando!");
  });
}

module.exports = { start };
