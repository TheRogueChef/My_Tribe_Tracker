const mongoose = require('mongoose');


const FamilySchema = new mongoose.Schema({
    familyTitle: {
        type: String,
        required: [true, 'Title required'],
        minLength: [2, 'Title must be at least 2 characters'],
        maxLength: 500},
    familyMembers: {
        type: String,
        required: [true, 'Who is in your family is required']},
    familyStatement: {
        type: String,
        required: [true, 'Statement required'],
        minLength: [10, 'Statements must be at least 10 characters'],
        maxLength: 5000},
}, {timestamps:true})

const Family = mongoose.model('Family', FamilySchema);

module.exports = Family;