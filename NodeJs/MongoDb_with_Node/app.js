const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "college";

const client = new MongoClient(url);

async function getData(){

    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection("bca");
    let response = await collection.find({roll:23}).toArray();
    console.log(response);
}

getData();