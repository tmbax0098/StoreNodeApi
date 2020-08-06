const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var User = new Schema({
    email: {type: String, default: "", required: true},
    password: {type: String, default: "", required: true},
    displayName: {type: String, default: "", required: false},
    image: {type: String, default: "", required: false},
    createDate: {type: Date, default: Date.now},
    blockDate: {type: Date, default: null},
    disactiveDate: {type: Date, default: null},
    deleteDate: {type: Date, default: null},
});

module.exports = mongoose.model('Users', User);