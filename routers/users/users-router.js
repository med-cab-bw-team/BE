const router = require('express').Router();
const Users = require('../users/users-model.js');
const validateUser = require('../auth/validate-user.js');


router.get('/', async (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({
                message: "There was an error on the API.",
                error: err
            })
        })
})

router.put('/:id', validateUser, (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Users.findById(id)
        .then((user) => {
            if(req.decodedToken && req.decodedToken.subject === user.id) {
                Users.update(changes, id)
                    .then(updatedUser => {
                        res.status(201).json({
                            message: 'The user has been updated',
                            user: updatedUser
                        });
                    })
            } else {
                res.status(404).json({
                    message: 'You can not update that user'
                })
            }
        })
        .catch( (err) => {
            res.status(500).json({
                message: 'User update failed. There was an error on the server',
                error: err
            })
        })
})



module.exports = router;
