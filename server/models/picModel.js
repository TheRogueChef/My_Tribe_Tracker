const mongoose = require('mongoose');

const PicSchema = new mongoose.Schema(
    {
        picTitle: {
            type: String,
            required: [true, 'Title required']
        },
        picDate: {
            type: Date,
            required: [true, 'Date required']
        },
        picLocation: {
            type: String,
            required: [true, 'Location required']
        },
        image: {
            type: String, 
            required: [true, 'Pic required, duh.']
        },
    },
    { timestamps: true }
);

const Pic = mongoose.model('Pic', PicSchema);

module.exports = Pic;

