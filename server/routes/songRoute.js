const SongController = require('../controllers/songController')

module.exports = app => {
    app.get('/api/allSongs', SongController.allSongs)
    app.get('/songRandomApi', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    })
    app.get('/songSearchApi', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    })
    app.get('/api/oneSong/:id', SongController.oneSong)
    app.post('/api/newSong', SongController.createSong)
    app.put('/api/updateSong/:id', SongController.updateSong)
    app.delete('/api/allSongs/:id', SongController.deleteSong)
}