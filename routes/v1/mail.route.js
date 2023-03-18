'use strict';

const express = require('express');
const { sendMailController } = require('../../controllers/mail.controller');
const router = express.Router();

router.post('/send', sendMailController);

module.exports = router;