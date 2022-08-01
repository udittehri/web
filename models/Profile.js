const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    describes: {
        type: String,
        required: false
    },
    discord: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    interests: {
        type: String,
        required: false
    },
    level: {
        type: String,
        required: false
    },
    reason: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Profiles', schema);


