const FamilyController = require('../controllers/familyController')

module.exports = app => {
    app.get('/api/allFamilies', FamilyController.allFamilies)
    app.get('/api/oneFamily/:id', FamilyController.oneFamily)
    app.post('/api/newFamily', FamilyController.createFamily)
    app.put('/api/updateFamily/:id', FamilyController.updateFamily)
    app.delete('/api/allFamilies/:id', FamilyController.deleteFamily)
    
}