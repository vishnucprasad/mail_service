const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = function ({ email, name, message }) {
    return new Promise(async (resolve, reject) => {
        const msg = {
            to: email,
            from: {
                email: process.env.FROM_EMAIL,
                name: process.env.FROM_NAME
            },
            templateId: process.env.TEMPLATE_ID,
            dynamicTemplateData: {
                name,
                message
            },
        }

        sgMail
            .send(msg)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
    });
}

module.exports = sendMail;