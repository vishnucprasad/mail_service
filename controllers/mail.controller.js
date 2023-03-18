'use strict';

const sendMail = require("../services/mail.service");

exports.sendMailController = (req, res) => {
    const { email, name, message } = req.body;
    sendMail({
        email,
        name,
        message
    })
        .then((response) => {
            res.status(202).json({
                status: true,
                response
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: false,
                error: err,
            });
        });
};