const mongoose = require('mongoose');


const EntrySchema = new mongoose.Schema({
    entryTitle: {
        type: String,
        required: [true, 'Title required'],
        minLength: [2, 'Title must be at least 2 characters'],
        maxLength: 500},
    entryDate: {
        type: Date,
        required: [true, 'A date is required']},
    entryAuthor: {
        type: String,
        required: [true, 'An author is required']},
    entry: {
        type: String,
        required: [true, 'entry required'],
        minLength: [2, 'Entry must be at least 2 characters'],
        maxLength: 5000},
    likes: {
        type: Number,
        default: 0,
    }
}, {timestamps:true})

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;













