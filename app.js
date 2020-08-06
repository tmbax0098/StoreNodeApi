var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var hash = require('hash.js')


const UserModel = require('./models/UserModel');

//connect to database
mongoose.connect('mongodb://localhost:27017/dbStoreNodeApi', {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if (err) {
        throw err
    } else {
        console.log("database connect successfully.");

        /*
        let admin = UserModel({
            email: "admin@gmail.com",
            password: hash.sha256().update('123456').digest('hex'),
            displayName: "Administrator",
        });
        admin.save(err => {
            if (err) {
                throw err
            } else {
                console.log('record save successfully.')
            }
        })
         */
    }
});


var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
