'use strict';

const express = require('express');
const router = express.Router();
const mailRouter = require('./mail.route');

router.use('/mail', mailRouter);

module.exports = router;