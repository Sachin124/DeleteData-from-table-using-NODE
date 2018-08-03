const {
    MongoClient
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/developers', (err, db) => {
    db.collection('developer').find().toArray().then((docs) => {
        if (err) {
            return console.log('Unable TO fetch data');
        }
        console.log(JSON.stringify(docs, undefined, 2));
    });
});