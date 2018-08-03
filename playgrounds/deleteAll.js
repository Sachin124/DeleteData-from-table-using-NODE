// we are using the deleteMany fuction

const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:/developers', (err, db)=>{
    db.collection('developer').deleteMany().then((res)=>{
        console.log(res);        
    });
});