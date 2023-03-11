'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const NotFoundError = require('./errors/notfound.error');
const statusCodes = require('./config/statuscodes.config');
const apiRouter = require('./routes');

const errorHandler = (err, req, res, next) => {
    res.status(err.statusCode || statusCodes.INTERNAL_SERVER_ERROR).json({
        error: true,
        message: err.message || err,
    });
};

const unMatchedRoutesHandler = (req, res, next) => {
    next(new NotFoundError());
};

const getApp = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    app.use('/api', apiRouter);
    app.all('*', unMatchedRoutesHandler);

    app.use(errorHandler);

    return app;
}

module.exports = getApp;