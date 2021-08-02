const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userShema = new Schema ({
    username: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
        minLength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userShema);

module.exports = User;