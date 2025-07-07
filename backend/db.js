
const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://nutankumari2695:Nutankr76@cluster0.dv8rn.mongodb.net/foodapp';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connection successful');
});

db.on('error', (error) => {
    console.log('MongoDB connection failed:', error);
});

module.exports = mongoose;
















// const mongoose = require("mongoose");

// var mongoURL = 'mongodb+srv://nutankumari2695:Nutankr76@cluster0.dv8rn.mongodb.net/foodapp';

// mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

// var db = mongoose.connection;

// db.on('connected', () => {
//     console.log('MongoDB connection successful');
// });

// db.on('error', () => {
//     console.log('MongoDB connection failed');
// });

// module.exports = mongoose;
