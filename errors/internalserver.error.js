'use strict';

const httpStatusCodes = require('../config/statuscodes.config');
const BaseError = require('./base.error');

class InternalServerError extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.INTERNAL_SERVER_ERROR,
        description = 'Internal Server Error',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description);
    };
};

module.exports = InternalServerError;