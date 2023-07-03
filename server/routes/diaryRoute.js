const DiaryController = require('../controllers/diaryController')


module.exports = app => {
    app.get('/api/allEntries', DiaryController.allEntries)
    app.get('/api/oneEntry/:id', DiaryController.oneEntry)
    app.post('/api/newEntry', DiaryController.createEntry)
    app.put('/api/updateEntry/:id', DiaryController.updateEntry)
    app.delete('/api/allEntries/:id', DiaryController.deleteEntry)
}