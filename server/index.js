const express = require("express");
const bodyParser = require("body-parser");

const db = require("../database");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/menu", (req, res) => {
  db.getMenu(function (result) {
    res.send(result);
  });
});
app.get("/api/logIn", (req, res) => {
  db.getUsers(function (result) {
    res.send(result);
  });
});


app.post("/api/order", (req, res) => {
  let data =req.body
  db.saveOrder(data,function (err,result) {
    console.log(data)
    if(err)console.log(err)
    res.send(result);
  });
});
     
app.post("/api/signup", (req, res) => {
  let data =req.body
  db.saveUser(data,function (err,result) {
    console.log(data)
    if(err)console.log(err)
    res.send(result);
  });
});
 


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
