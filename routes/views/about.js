var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';

	// Load the current post
	view.on('init', function (next) {
		next();
	});

	// Render the view
	view.render('pages/about');
};
