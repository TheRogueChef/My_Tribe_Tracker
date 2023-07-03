const Family = require('../models/familyModel');

module.exports={

allFamilies: (req, res) => {
    Family.find({})
        .then((allFamilies) => {
            res.json(allFamilies)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneFamily: (req, res) => {
    Family.findOne({_id: req.params.id})
        .then((family) => {
            res.json(family)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

createFamily: (req, res) => {
    Family.create(req.body)
        .then((newFamily) => {res.json(newFamily)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

updateFamily: (req, res) => {
    Family.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedFamily) => {res.json(updatedFamily)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

deleteFamily: (req, res) => {
    Family.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => {
            res.json(deleteConfirmation)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
}