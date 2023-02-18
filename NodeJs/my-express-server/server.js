const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    // console.log(request);
    res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res)=>{
    // console.log("Contact me to : abhishekkamti723@gmail.com");
    res.send("<h1>Contact me to : abhishekkamti723@gmail.com</h1>")
});

app.get("/about", (req, res)=>{
    res.send("<h1> My name is Abhishek and I am pursuing BCA from Brainware university, Kolkata</h1>");
});

app.get("/hobbies", (req, res)=>{
    res.send("<h1>I love to play cricket also intersted in geopolitics");
});

app.listen(3000, ()=>{
    console.log("Server has started on port 3000");
});