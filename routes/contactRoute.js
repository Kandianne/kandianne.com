var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport("SMTP", {
	service: "Gmail",
	auth: {
		user: "kandipierre@gmail.com",
		pass: "longlivelearning999"
	}
}) ;



router.post('/', function(req, res){
	console.log(req.body);

	var data = req.body;

	var mailObject = {
		from: data.contactEmail + " KandiKontact.",
		// from: 'kandipierre@gmail.com',
		to: 'kandipierre@gmail.com',
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