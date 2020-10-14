const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../routers/auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: 'API is running'})
})

server.use('/api/auth', authRouter);


module.exports = server;