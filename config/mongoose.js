const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://dian:rahasia@localhost:27017/dian-mongoose?authSource=admin');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => console.log('Database connected successfully'));