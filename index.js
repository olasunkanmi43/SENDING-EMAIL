const nodemailer = require('nodemailer');

const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ayodan043@gmail.com',
        pass: ''
    }
});

const mail = {
    from: 'ayodan043@gmail.com',
    to: 'jaystar1311@gmail.com',
    subject: 'Good morning sir! How are you doing? Do have a productive day.',
    text: 'That was easy!',

    attachments: [
        {
        filename: 'pic-4.png',
        path: __dirname + '/pic-4.png',
        cid: 'uniq-pic-4.png'
    }
    ]
};

sender.sendMail (mail, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log("Email sent successfully: " + info.response);
    }
});