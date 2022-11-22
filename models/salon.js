const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
    , image:
    {
        type: String,
        required: true
    }
})

const salons = mongoose.model('salons', salonSchema);

module.exports = salons;