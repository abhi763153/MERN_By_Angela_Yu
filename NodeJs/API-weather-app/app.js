const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{

    res.sendFile(__dirname+"/index.html");

});

app.post("/", (req, res)=>{
    
    const city = req.body.city;
    const apiKey="3f8fb69a6522b2f0f45571ffc6ddb7e1";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="+city+"&units="+unit;
    
    https.get(url, (response)=>{

        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);

           const temp = weatherData.main.temp;
           const desc = weatherData.weather[0].description;
           const icon = weatherData.weather[0].icon;
           const iconUrl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
           
           res.write("<p>About "+city+" weather "+desc+"</p>");
           res.write("<img src="+iconUrl+">")
           res.write("<h1> The temperature of "+city+" is "+temp+" degree Celcius</h1>")
           res.send();
        });
    });
    
});


app.listen(3000, ()=>{
    console.log("Serever is running on port 3000");
});