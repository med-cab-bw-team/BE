const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../routers/auth/authenticate-middleware.js')
const authRouter = require('../routers/auth/auth-router.js');
const usersRouter = require('../routers/users/users-router.js');
const statesRouter = require('../routers/states/states-router.js');
const strainsRouter = require('../routers/strains/strains-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: 'API is running'})
})

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter);
server.use('/api/states', statesRouter)
server.use('/api/strains', strainsRouter)


module.exports = server;