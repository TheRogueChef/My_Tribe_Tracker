// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization || req.cookies.token;

//     if (!token) {
//         return res.status(401).json({ error: 'Unauthorized' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log('Decoded token:', decoded);
//         User.findOne({ _id: decoded._id }, function (err, user) {
//             if (err || !user) {
//                 return res.status(401).json({ error: 'Unauthorized' });
//             }

//             req.user = user;
//             console.log(req.user)
//             next();
//         });
//     } catch (error) {
//         return res.status(401).json({ error: 'Unauthorized' });
//     }
// };

// module.exports = authMiddleware;



