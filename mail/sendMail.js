var nodemailer = require('nodemailer');

// pas encore terminé

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'affalistephane@gmail.com',
    pass: '***********'
  }
});

var mailOptions = {
  from: 'affalistephane@gmail.com',
  to: 'stephaneaffali@gmail.com',
  subject: 'Mail envoyé à partir de node js',
  text: 'Salutation de la part de GoMycode'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});