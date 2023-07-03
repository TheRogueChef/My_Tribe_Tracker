const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    entryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Entry', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;