'use strict';

const dotenv = require('dotenv');
const logger = require('./config/logger.config');
const getApp = require('./app');

dotenv.config();

const port = process.env.PORT || 3000;

const app = getApp();

const server = app.listen(
    port,
    () => logger.info(`Server listening on port ${port}`)
).on(
    'error',
    (err) => logger.error(`Port ${err.port} is already in use`),
);

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);

        });
    } else {
        process.exit(1);
    }
};

const unExpectedErrorHandler = (err) => {
    logger.error(err);
    exitHandler();
};

process.on('uncaughtException', unExpectedErrorHandler);
process.on('unhandledRejection', unExpectedErrorHandler);

process.on('SIGINT', () => {
    logger.info('SIGINT received');
    if (server) {
        server.close();
    }
});

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});