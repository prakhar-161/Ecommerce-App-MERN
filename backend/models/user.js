const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 35
    },
    email: {
        type: String,
        required: true,
        maxLength: 200,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024
    }
});

module.exports = User = mongoose.model('User', UserSchema);