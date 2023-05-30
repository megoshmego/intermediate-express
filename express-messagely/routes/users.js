const express = require('express');
const User = require('../models/user');
const Message = require('../models/message');
const Router = express.Router();

Router.get('/', async function(req, res, next) {
    try {
        const users = await User.getAllUsers();

        res.json({users: users});
    } catch (error) {
        next(error);
    }
});

Router.get('/:username', async function(req, res, next) {
    try {
        const user = await User.getUserByUsername(req.params.username);

        res.json({user: user});
    } catch (error) {
        next(error);
    }
});

Router.get('/:username/to', async function(req, res, next) {
    try {
        const messages = await Message.getMessagesTo(req.params.username);

        res.json({messages: messages});
    } catch (error) {
        next(error);
    }
});

Router.get('/:username/from', async function(req, res, next) {
    try {
        const messages = await Message.getMessagesFrom(req.params.username);

        res.json({messages: messages});
    } catch (error) {
        next(error);
    }
});

module.exports = Router;
