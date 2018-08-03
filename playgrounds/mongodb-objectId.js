const {MongoClient,ObjectId}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/developers', (err, db)=>{
    db.collection('developer').find({
        _id: new ObjectId("5b646d453a8df01edc3a7922")
    }).toArray().then((docs)=>{
        if(err){
            return console.log('Unable TO Find Data');            
        }
        console.log(JSON.stringify(docs, undefined, 2));        
    });
});