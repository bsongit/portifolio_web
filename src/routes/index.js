const routes = require('express').Router();

routes.use('/users', require('./users'));
routes.use('/comments', require('./comments'));
routes.use('/feed_items', require('./feed_items'));

module.exports = routes;
