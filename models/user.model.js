const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type:String,
        required: true,
        trim: true
    },
    occupation: {
        type:String,
        required: true,
        trim: true
    },
    email: {
        type:String,
        required: true,
        trim: true
    },
    phonenumber: {
        type:String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

const User = mongoose.model('people', userSchema);

module.exports = User;