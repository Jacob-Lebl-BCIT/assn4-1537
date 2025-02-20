// Express app

const express = require("express");
const app = express();
app.use(express.json());

// File system
const fs = require("fs");

// Proxy paths
// app.use("/", express.static("public"));
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

app.get("/", (req, res) => {
    let doc = fs.readFileSync("public/index.html", "utf8");
    res.send(doc);
})

app.get("/maw", (req, res) => {
    console.log("Here");

    res.send('<html><head></head> <body> <img src="/img/maw.jpg"></body></html>');
})



app.listen(8000);

