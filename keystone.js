// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();
// const mongoose = require('mongoose')
// Require keystone

// const express = require('express');
// onst app = express();

const keystone = require('keystone');
// require('./db/db');
// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
// const url = process.env.MONGODB_URL;
// mongoose.connect('mongodb+srv://Nanny:54lTICV7mPjUYZcc@cluster0.pil78.mongodb.net/irie_blog?retryWrites=true&w=majority', { useNewUrlParser: true });
// const db = mongoose.connection;
// db.once('open', _ => {
// 	console.log('Database connected:', url);
// });
// db.on('error', err => {
// 	console.error('connection error:', err);
// });
keystone.init({
	'name': 'Irie Stomach',
	'brand': 'Irie Stomach',

	'stylus': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'ejs',
	'cloudinary config': 'cloudinary://844958119169292:zdcfbyvqSbPVwjJmxEYdkBmCd9w@irie-stomach-blog',	'mongo': process.env.MONGO_URI || 'mongodb://localhost/irie_stomach',
	'emails': 'templates/emails',
	'cookie secret': process.env.COOKIE_SECRET || 'irie',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});


// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	// enquiries: 'enquiries',
	users: 'users',
	about: 'about',
});

// Start Keystone to connect to your database and initialise the web server


// if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
// 	console.log('----------------------------------------'
// 	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
// 	+ '\n----------------------------------------'
// 	+ '\nYou have opted into email sending but have not provided'
// 	+ '\nmailgun credentials. Attempts to send will fail.'
// 	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
// 	+ '\nset up your mailgun integration');
// }


keystone.start();
