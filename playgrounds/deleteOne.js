// we are using a deleteOne function

const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:/developers', (err, db)=>{
    db.collection('developer').deleteOne({
        name: "Sachin"
    }).then((res)=>{
        console.log(res);        
    });
});