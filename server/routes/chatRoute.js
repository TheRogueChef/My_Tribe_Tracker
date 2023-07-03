const ChatController = require('../controllers/chatController');

module.exports = (app) => {
    app.post('/api/allChats', ChatController.createChat);
    app.get('/api/allChats', ChatController.getAllChats);
};
