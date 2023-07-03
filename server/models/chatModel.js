const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    author: { type: String, required: true }, // Add the 'author' field to the schema
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;


