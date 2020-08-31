const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nanny:54lTICV7mPjUYZcc@cluster0.pil78.mongodb.net/irie_blog?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
