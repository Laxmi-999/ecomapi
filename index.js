const express = require("express");
const cors = require("cors");

const App = express();

App.use(cors());
port = process.env.PORT || 3000;

const apiData = require("./data.json");


App.get("/", (req, res) =>{

    res.send("hello server");
});

App.get("/service",  (req,res) =>{
    res.send(apiData);
});

App.listen(port, () => {
    console.log(" hello server");
});