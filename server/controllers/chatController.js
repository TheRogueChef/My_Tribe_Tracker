const Chat = require('../models/chatModel');


const createChat = async (req, res) => {
    const { author, content } = req.body;

    try {
        const newChat = await Chat.create({ author, content });

        res.status(201).json({ chat: newChat });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllChats = async (req, res) => {
    try {
        const chats = await Chat.find().sort({ timestamp: 1 });
        res.json({ chats });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createChat,
    getAllChats,
};
