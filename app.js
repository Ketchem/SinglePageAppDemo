var express = require("express");
var app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("main");
});

app.listen(3000, "localhost", function(){
    console.log("Single Page Demo Started!");
 });


