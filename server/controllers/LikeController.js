const Entry = require('../models/diaryModel');
const Event = require("../models/eventModel");


const incrementLikes = async (req, res) => {
    const { entryId } = req.body;
    const { eventId } = req.body;
    

    try {
        await Entry.updateOne({ _id: entryId }, { $inc: { likes: 1 } });
        await Event.updateOne({ _id: eventId }, { $inc: { likes: 1 } });

        res.json({ message: 'Likes incremented' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    incrementLikes
};




