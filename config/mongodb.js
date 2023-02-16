const { Mongo, MongoClient } = require('mongodb');

const url = 'mongodb://dian:rahasia@localhost:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('Successfully connected to mongodb');
    } catch(err) {
        console.log(err);
    }  
})();

const db = client.db('dian-mongodb');

module.exports = db;