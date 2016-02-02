var express = require('express');
var router = express.Router();
// var env = require('../env.js');
var nodemailer = require('nodemailer');



//------------------------------------------HANDLING ERRORS FOR PASS----------------------------------------------
function moduleAvailable(name) {
	try {
		require.resolve(name);
		return true;
	} catch (e) {}
	return false;
}

if (moduleAvailable('../env.js')) {
	var env = require('../env.js');
} else {
	var env = {
		EMAIL_PASS: null,
		EMAIL: null
	};
}

var transporter = nodemailer.createTransport("SMTP", {
	service: "Gmail",
	auth: {
		user: process.env.EMAIL || env.EMAIL,
		pass: process.env.EMAIL_PASS || env.EMAIL_PASS
	}
}) ;

//------------------------------------------------------------------------------------------------------------------------
router.post('/', function(req, res){
	console.log(req.body);

	var data = req.body;

	var mailObject = {
		from: data.contactEmail + " KandiKontact.",
		// from: 'kandipierre@gmail.com',
		to: 'kandiannep@gmail.com',
		subject: 'Message from ' + data.contactName,
		html: data.contactMessage + "<br><br>FROM EMAIL ADDRESS: " + data.contactEmail
	};

	transporter.sendMail(mailObject, function(err, info) {
		if(err) {console.log(err, "contactRoutes36")}
			else{console.log('Message sent: ' + info)};
	});
	res.send(data);
})

module.exports = router;