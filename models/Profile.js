const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    class: {
        type: Number,
        required: false
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Profiles', schema);
