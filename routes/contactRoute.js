var express = require('express');
var router = express.Router();
var env = require('../env.js');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport("SMTP", {
	service: "Gmail",
	auth: {
		user: env.EMAIL,
		pass: env.EMAIL_PASS
	}
}) ;



router.post('/', function(req, res){
	console.log(req.body);

	var data = req.body;

	var mailObject = {
		from: data.contactEmail + " KandiKontact.",
		// from: 'kandipierre@gmail.com',
		to: env.EMAIL,
		subject: 'Message from ' + data.contactName,
		html: data.contactMessage + "<br><br>FROM EMAIL ADDRESS: " + data.contactEmail
	};

	transporter.sendMail(mailObject, function(err, info) {
		if(err) {console.log(err, "contactRoutes36")}
			else{console.log('Message sent: ' + info.body)};
	});
	res.send(data);
})

module.exports = router;