const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', 'uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const gridFsStorage = new GridFsStorage({
    url: 'mongodb://127.0.0.1:27017/My_Tribe_Tracker', 
    file: (req, file) => {
        return {
            bucketName: 'images',
            filename: file.originalname, 
        };
    },
});

const upload = multer({
    storage: gridFsStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, 
    },
});

module.exports = { upload, gridFsStorage };


