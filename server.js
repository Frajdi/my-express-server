const express = require('express');


const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: frajdimalaj@gmail.com");
});

app.get("/about", function(req, res){
  res.send("I am Frajdi Malaj and i own this server and this page.");
});

app.get("/hobbies", function(req, res){
  res.send("My hobbies are gym and programming");
});

app.listen(3000, function(){
  console.log("Server started in port 3000.")
});
