const express = require("express");
const bodyParser = require("body-parser");

const db = require("../database");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/menu", (req, res) => {
  db.getMenu(function (result) {
    res.send(result);
  });
});


app.post("/api/order", (req, res) => {
     res.json(req.body)
 
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
