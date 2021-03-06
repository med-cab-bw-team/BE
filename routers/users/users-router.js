const router = require('express').Router();
const Users = require('../users/users-model.js');
const validateUpdateUser = require('../auth/validate-update-user.js');


router.get('/', (req, res) => {
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

router.get('/:id', validateUpdateUser, (req, res) => {
    const { id } = req.params;
    if(req.decodedToken && req.decodedToken.subject === parseInt(id)) {
        Users.findById(id)
            .then(user => {
                res.status(200).json({
                    id: user.id,
                    firstName:user.firstName,
                    lastname:user.lastname,
                    username:user.username,
                    email:user.email,
                    currentCity:user.currentCity,
                    state_abbreviation:user.state_abbreviation,
                    recommendation_1:user.recommendation_1,
                    recommendation_2:user.recommendation_2
                })
            })
            .catch( (err) => {
                res.status(500).json({
                    message: 'User update failed. There was an error on the server',
                    error: err
                })
            });
    } else {
        res.status(400).json({message: "You can not do that"})
    }
})

router.put('/:id', (req, res) => {
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
                    .catch((err) => {
                        res.status(500).json({
                            messsage: 'There was nothing to update',
                            error: err
                        })
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

router.delete('/:id', validateUpdateUser, (req, res) => {
    const { id } = req.params;

    Users.findById(id)
        .then((user) => {
            if(req.decodedToken && req.decodedToken.subject === user.id) {
                Users.remove(id)
                    .then(deletedUser => {
                        res.status(201).json({
                            message: 'The user has been deleted',
                            user: deletedUser
                        });
                    })
            } else {
                res.status(404).json({
                    message: 'You can not delete that user'
                })
            }
        })
        .catch( (err) => {
            res.status(500).json({
                message: 'Delete user failed. There was an error on the server',
                error: err
            })
        })
})



module.exports = router;
