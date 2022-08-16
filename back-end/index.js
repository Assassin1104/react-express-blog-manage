var express = require('express');
const cors = require('cors');
var app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/", function (req, res, next) {
    res.send("Hello world!");
});

app.post("/auth/login", function(req, res, next) {
    res.send("Okay");
});

app.listen(5000);