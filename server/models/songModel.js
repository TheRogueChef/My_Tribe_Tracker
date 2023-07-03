const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    songTitle: {
        type: String,
        required: [true, 'A Title is required']
    },
    songArtist: {
        type: String,
        required: [true, 'An artist is required']
    },
    audioFile: {
        type: String,
        required: [true, 'An audio file is required']
    }
}, { timestamps: true });

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;