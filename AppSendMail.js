var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://username%40gmail.com:password@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Sender Name" <username@yahoo.com>', // sender address
   // to: 'github@gmail,baz@blurdybloop.com', // list of receivers
	to: 'username@yahoo.com, username@gmail.com',// list of receivers
    subject: 'Test App NodeJs✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Sending email by Application. Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});