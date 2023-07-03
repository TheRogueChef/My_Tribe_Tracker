const Song = require('../models/songModel');

module.exports = {
    allSongs: (req, res) => {
        Song.find({})
            .then((allSongs) => {
                res.json(allSongs);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Something went wrong', error: err });
            });
    },

    oneSong: (req, res) => {
        Song.findOne({ _id: req.params.id })
            .then((song) => {
                res.json(song);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Something went wrong', error: err });
            });
    },

    createSong: (req, res) => {
        Song.create(req.body)
            .then((newSong) => {
                res.json(newSong);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Something went wrong', error: err });
            });
    },

    updateSong: (req, res) => {
        Song.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((updatedSong) => {
                res.json(updatedSong);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Something went wrong', error: err });
            });
    },

    deleteSong: (req, res) => {
        Song.deleteOne({ _id: req.params.id })
            .then((deleteConfirmation) => {
                res.json(deleteConfirmation);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Something went wrong', error: err });
            });
    }
};
