// we are using the findOneAndDelete function

const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:/developers',(err, db)=>{
    db.collection('developer').findOneAndDelete({
        name: "Sachin"
    }).then((res)=>{
        console.log(res);        
    });
});