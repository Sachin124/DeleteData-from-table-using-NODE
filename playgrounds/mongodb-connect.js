const {
    MongoClient
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/developers',(err, db)=>{
    if(err){
        return console.log('MongoDB Not Conncted');        
    }
    console.log('MngoDB Connected Successfully..!');
    
    db.collection('developer').insertOne({
        name: 'Sachin',
        lastName: 'Bahegavankar',
        Developer: 'MEANSTACK'
    },(err, result)=>{
        if (err) {
            return console.log('Data Not Inserted');                        
        }
        console.log(JSON.stringify(result.ops, undefined, 2));        
    });

    db.close();
});