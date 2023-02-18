const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{

    res.sendFile(__dirname+"/signup.html");
});

app.post("/", (req, res)=>{

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    console.log(firstName+" "+lastName+" "+email);

});



app.listen(3000, ()=>{
    console.log("Port is running on 3000 port");
});



// API key - 8a12f27227de6555f10bf5a55226b4ee-us14 
