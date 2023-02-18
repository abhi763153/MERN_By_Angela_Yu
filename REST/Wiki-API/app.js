const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser:true});

const articleDocShema = new mongoose.Schema({
    title : String,
    content : String
});

const Article = new mongoose.model("Article", articleDocShema);

/////////////////////////////////// Requests targetting all the articles ///////////////////////////////////////////////

app.route("/articles").get((req, res)=>{

        Article.find({}, (err, foundArticles)=>{
            // console.log(foundArticles);
            res.send(foundArticles);
        });
    }
).post((req, res)=>{
    
    const article = new Article({
        title : req.body.title,
        content : req.body.content
    });

    article.save((err)=>{
        if(!err){
            res.send("Successfully added");
        }
        else{
            res.send(err);
        }
    });
}).delete((req, res)=>{
    
    Article.deleteMany((err)=>{
        if(!err){
            res.send("All articles deleted successfully");
        }
        else{
            res.send(err);
        }
    })
});

/////////////////////////////////// Requests targetting a single article ///////////////////////////////////////////////

app.route("/articles/:articleTitle")
.get((req, res)=>{

    const articleTitle = _.capitalize(req.params.articleTitle);

    Article.findOne({title: articleTitle}, (err, result)=>{
        
        if(result){
            res.send(result);
        }
        else{
            res.send("No article found of this title.");
        }
    });

})
.put((req, res)=>{
console.log("I am in put");
    Article.updateOne(
        {title: req.params.articleTitle},
        {title : req.body.title, content: req.body.content},
        (err)=>{
            if(!err){
                res.send("Arctile add successfully");
            }
            else{
                res.send(err);
            }
        }
    );
})
.patch((req, res)=>{
    console.log(req.body);
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set : req.body},
        (err)=>{
            if(!err){
                res.send("Article updated successfully");
            }
        }
    );
})
.delete((req, res)=>{
    Article.deleteOne({title: req.params.articleTitle}, (err)=>{
        if(!err){
            res.send("Deleted successfully");
        }
    });
});



app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});