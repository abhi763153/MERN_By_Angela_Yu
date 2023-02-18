const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Country")
.then( ()=>{console.log("Connected successfully");}) 
.catch( (err)=>{console.log(err);});

// Schema 
// A mongoose schema defines the structure of the document, default values, validators, etc.

const cityDataStructure = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    population: Number,
    country : String,
    Litracy: Number, 
    Health_Index: Number,
    date : {
        type: Date,
        default: Date.now
    }
});

// A mongoose model is a wrapper on the mongoose schema.
// A mongoose schema defines the structure of the document, default values, validators
// etc. 

// Collection creation 

const City = new mongoose.model("City", cityDataStructure);

// creating a document or insert

const createDocument = async ()=>{

    try {
        const Pryagraj = new City({
            name: "Pryagraj",
            population: 4500,
            country : "India",
            Litracy: 83, 
            Health_Index: 19,
        });
        // const Mumbai = new City({
        //     name: "Mumbai",
        //     population: 250000,
        //     country : "India",
        //     Litracy: 86, 
        //     Health_Index: 12,
        // });
        // const Surat = new City({
        //     name: "Surat",
        //     population: 250000,
        //     country : "India",
        //     Litracy: 86, 
        //     Health_Index: 12,
        // });
        // const Hydrabad = new City({
        //     name: "Hydrabad",
        //     population: 250000,
        //     country : "India",
        //     Litracy: 86, 
        //     Health_Index: 12,
        // });

        Pryagraj.save();
        // const result = await City.insertMany([Bengalore, Mumbai, Surat, Hydrabad]);
    } catch (err) {
        console.log(err);
    }
    
}

// createDocument ();

// Get Document

const getDocument = async ()=>{
    const result = await City.find({})
    .sort({population:-1})
    // .countDocuments()
    // .select({name:1})
    // .limit(1);
    console.log(result);
}

// getDocument();

const updateDocument = async () =>{

    City.updateMany({Litracy: 86}, {Health_Index: 4}, (err, docs)=>{
        if(!err){
            console.log("Document updated successfully");
        }
    })
}

// updateDocument();


const deleteDocument = async ()=>{

    try {

        // const obj = await City.deleteOne({name:"Mumbai"}); --> It is returning object with deleteCount

        // const deleted = await City.findByIdAndDelete({_id: "624889601bf182a7cad957b5"});  --> It will return deleted document
        // console.log(deleted);
    } catch (error) {
        
    }
}

// deleteDocument();