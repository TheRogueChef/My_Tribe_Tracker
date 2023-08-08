const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('./config/mongoose.config');
const cookieParser = require('cookie-parser');

require('dotenv').config();


const upload = multer({ dest: 'uploads/' });
const Pic = require('./models/picModel');

const app = express();
const port = 8000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads/'));

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

const userRoutes = require('./routes/userRoutes');
const diaryRoute = require('./routes/diaryRoute');
const eventRoute = require('./routes/eventRoute');
const familyRoute = require('./routes/familyRoute');
const songRoute = require('./routes/songRoute');
const likeRoute = require('./routes/likeRoute');
const picRoute = require('./routes/picRoute');
const chatRoute = require('./routes/chatRoute');


userRoutes(app);

diaryRoute(app);
eventRoute(app);
familyRoute(app);
songRoute(app);
likeRoute(app);
chatRoute(app);
app.use(picRoute);

app.post('/api/newPic', upload.single('image'), (req, res) => {
    console.log('Received data from the client:', req.body);
    const { picTitle, picDate, picLocation } = req.body;

    console.log('Made it past the upload:', req.body);
    if (req.file) {
        const image = req.file.filename;

        const newPic = new Pic({
            picTitle,
            picDate,
            picLocation,
            image,
        });


        newPic.save()
            .then(() => {
                res.status(200).json({ message: 'Pic created successfully' });
            })
            .catch(() => {
                res.status(500).json({ message: 'Failed to create the pic' });
            });
    } else {
        res.status(400).json({ message: 'No image file provided' });
    }

});



app.listen(port, () => console.log('The server is all fired up on port', port));






















