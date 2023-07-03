const Pic = require('../models/picModel');
const { upload, gridFsStorage, gfs } = require('../middlewares/imageStorage');
const mongoose = require('mongoose');
const multer = require('multer');

module.exports = {

    allPics: (req, res) => {
        Pic.find({})
            .then((allPics) => {
                console.log(allPics)
                res.json(allPics);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Something went wrong', error: err });
            });
    },

    createPic: (req, res) => {
        console.log('Received data from the client:', req.body);
        const { picTitle, picDate, picLocation } = req.body;

        upload.single('image')(req, res, (err) => {
            console.log('Made it passed the upload:');
            console.log('req.file:', req.file);
            if (err) {
                return res.status(500).json({ message: 'Is this where it went wrong', error: err });
            }

            const image = req.file ? req.file.filename : null;

            const newPic = new Pic({
                picTitle,
                picDate,
                picLocation,
                image,
            });

            newPic
                .save()
                .then((savedPic) => {
                    res.json(savedPic);
                })
                .catch((err) => {
                    res.status(500).json({ message: 'Something went wrong', error: err });
                });
        });
    },

    deletePic: (req, res) => {
        Pic.deleteOne({ _id: req.params.id })
            .then((deleteConfirmation) => {
                res.json(deleteConfirmation);
            })
            .catch((err) => {
                res.status(500).json({ message: 'Something went wrong', error: err });
            });
    },

    onePic: (req, res) => {
        Pic.findOne({ _id: req.params.id })
        console.log(req.params.id)
            .then((pic) => {
                res.json(pic);
            })
            .catch((err) => {
                res.status(500).json({ message: 'This is the findOne error message', error: err });
            });
    },

    getImage: (req, res) => {
        const picId = req.params.id;
        console.log(req.params.id);
        console.log("QQQQQQQQQQQQQQQ", picId);

        try {
            Pic.findOne({ _id: picId })
                .then((pic) => {
                    console.log("after pic.findOne", picId);
                    if (!pic) {
                        return res.status(404).json({ message: 'Pic not found' });
                    }
                    console.log('AAAAAAAAAAAAAAAAA', pic.image);
                    const imageFileName = pic.image;

                    const gfs = mongoose.connection.db.collection('images');
                    // console.log(gfs);
                    console.log("right after const gfs, before gfs.findOne");
                    console.log(imageFileName);

                    gfs.findOne({ filename: imageFileName }, (err, file) => {
                        if (err) {
                            console.error('Error in gfs.findOne:', err);
                            return res.status(500).json({ message: 'Something went wrong', error: err });
                        }

                        if (!file) {
                            console.error('Image not found in GridFS');
                            return res.status(404).json({ message: 'Image not found' });
                        }

                        if (file.contentType.startsWith('image/')) {
                            const readstream = gfs.openDownloadStream(file._id);
                            res.set('Content-Type', file.contentType);
                            readstream.pipe(res);
                        } else {
                            console.log('Not an image file');
                            res.status(404).json({ message: 'Not an image file' });
                        }
                    });
                })
                .catch((err) => {
                    console.error('Error in Pic.findOne:', err);
                    res.status(500).json({ message: 'Something went wrong', error: err });
                });
        } catch (error) {
            console.error('Error in Pic.findOne:', error);
            res.status(500).json({ message: 'Something went wrong', error });
        }
    },


};
