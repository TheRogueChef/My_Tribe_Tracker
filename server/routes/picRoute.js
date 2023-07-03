const express = require('express');
const router = express.Router();
const PicController = require('../controllers/picController');
const { upload: imageStorageUpload } = require('../middlewares/imageStorage');




router.post('/api/newPic', imageStorageUpload.single('image'), PicController.createPic);
router.delete('/api/allPics/:id', PicController.deletePic);
router.get('/api/allPics', PicController.allPics);
router.get('/api/allPics/:id/image', PicController.getImage)
router.get('/api/allPics/:id', PicController.onePic);

module.exports = router;


