const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('./config/mongoose.config');


require('dotenv').config();


const app = express();
const port = 8000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


const userRoutes = require('./routes/userRoutes');
const diaryRoute = require('./routes/diaryRoute');
const eventRoute = require('./routes/eventRoute');
const familyRoute = require('./routes/familyRoute');
const songRoute = require('./routes/songRoute');
const likeRoute = require('./routes/likeRoute');
const chatRoute = require('./routes/chatRoute');


userRoutes(app);

diaryRoute(app);
eventRoute(app);
familyRoute(app);
songRoute(app);
likeRoute(app);
chatRoute(app);




app.listen(port, () => console.log('The server is all fired up on port', port));






















