const express = require('express');
const User = require('../models/user');
const Message = require('../models/message');
const Router = express.Router();

* => {message: {id,
    *               body,
    *               sent_at,
    *               read_at,
    *               from_user: {username, first_name, last_name, phone},
    *               to_user: {username, first_name, last_name, phone}}
    *
    * Make sure that the currently-logged-in users is either the to or from user.
    *
    **/
   
   
   /** POST / - post message.
    *
    * {to_username, body} =>
    *   {message: {id, from_username, to_username, body, sent_at}}
    *
    **/
   
   
   /** POST/:id/read - mark message as read:
    *
    *  => {message: {id, read_at}}
    *
    * Make sure that the only the intended recipient can mark as read.
    *
    **/
   

Router.get('/:id', async function(req, res, next) {
    try {
        const message = await Message.getMessageById(req.params.id);

        // Assuming you've set up some kind of authentication and have access to the currently logged-in user
        if (req.user.username !== message.from_user.username && req.user.username !== message.to_user.username) {
            throw new Error('Unauthorized');
        }

        res.json({message: message});
    } catch (error) {
        next(error);
    }
});

Router.post('/', async function(req, res, next) {
    try {
        const { to_username, body } = req.body;
        const from_username = req.user.username;

        const message = await Message.createMessage({ from_username, to_username, body });

        res.json({message: message});
    } catch (error) {
        next(error);
    }
});

Router.post('/:id/read', async function(req, res, next) {
    try {
        const message = await Message.getMessageById(req.params.id);

        // Only the intended recipient can mark as read
        if (req.user.username !== message.to_user.username) {
            throw new Error('Unauthorized');
        }

        const updatedMessage = await Message.markAsRead(req.params.id);

        res.json({message: updatedMessage});
    } catch (error) {
        next(error);
    }
});

module.exports = Router;
