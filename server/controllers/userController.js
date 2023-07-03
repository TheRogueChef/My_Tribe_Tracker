const User = require('../models/userModel');

module.exports = {
    registerUser: async (req, res) => {
        try {
            const potentialUser = await User.findOne({ email: req.body.email })
            if (potentialUser) {
                res.status(400).json({ message: 'That email already exists' })
            } else {
                const newUser = await User.create(req.body);
                res.status(201).json(newUser);
            }
        } catch (err) {
            res.status(400).json({ error: err })
        }
    },

    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (user) {
                res.status(201).json(user);
            } else {
                res.status(400).json({ message: 'Invalid email/password' })
            }
        } catch (err) {
            res.status(400).json({ error: err })
        }
    },
    
    logout: (req, res) => {
        res.json({ message: 'You logged out' })
    }
}
