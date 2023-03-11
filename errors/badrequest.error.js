'use strict';

const httpStatusCodes = require('../config/statuscodes.config');
const BaseError = require('./base.error');

class BadrequestError extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.BAD_REQUEST,
        description = 'Bad request',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description);
    };
};

module.exports = BadrequestError;