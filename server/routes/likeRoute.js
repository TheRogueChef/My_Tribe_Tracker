const LikeController = require('../controllers/LikeController')

module.exports = app => {
    app.post('/api/likeEntry', LikeController.incrementLikes)
}