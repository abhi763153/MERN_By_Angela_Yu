const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
    // console.log(__dirname);
});
app.post("/", (req, res)=>{
    // res.send("Thank you for posting");
    // console.log(req.body.n1);

    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var c = n1 + n2;

    res.send("The value of n1+n2 is "+ c);
});

app.get("/bmiCalculator", (req, res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res)=>{

    var bmi = req.body.weight/Math.pow(req.body.height, 2);
    res.send("<h1>Your BMI value is "+bmi+"</h1>");
});


// app.get("/contact", (req, res)=>{
//     res.send("<h1>Send me message on: abhishekkamti723@gmail.com")
// });

app.listen(3000, ()=>{
    console.log("Port 3000 has started");
});