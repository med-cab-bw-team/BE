const router = require('express').Router();
const States = require('../states/states-model.js');

router.get('/', (req, res) => {
    States.find()
        .then(states => {
            res.status(200).json(states)
        })
        .catch(err => {
            res.status(500).json({
                message: "There was an error on the API Server.",
                error: err
            })
        })
})

module.exports = router;