const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function(){
    const db = config.get('db');
    // mongoose.connect('mongodb://localhost/vidly', {
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useNewUrlParser: true,
    // })
    // .then(() => winston.info("Connected to MongoDB..."));
    mongoose.connect(config.get('db'), {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
    })
    .then(() => winston.info(`Connected to ${db}...`));
}