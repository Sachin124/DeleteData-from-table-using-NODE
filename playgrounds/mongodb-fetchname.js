const {
    MongoClient
} = require('mongodb');

MongoClient.connect('mongodb://localhost:/developers', (err, db) => {

    db.collection('developer').find({
        name: "Sagar"
    }).toArray().then((docs) => {
        if (err) {
            return console.log('Could Not Find Data');
        }
        console.log(JSON.stringify(docs, undefined, 2));
    });
});