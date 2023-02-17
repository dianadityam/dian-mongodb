const mongoose = require('mongoose');
require('dotenv').config();

// const uri = 'mongodb://dian:rahasia@localhost:27017/dian-mongoose?authSource=admin';
const uri = process.env.MONGODB_URL;

mongoose.set('strictQuery', false);
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => console.log('Database connected successfully'));
