const mongoose = require('mongoose');

mongoose.connect('MONGODB_URL=mongodb://Nanny:h7RBnU7ZaLrxUCnY@cluster0-shard-00-00.pil78.mongodb.net:27017,cluster0-shard-00-01.pil78.mongodb.net:27017,cluster0-shard-00-02.pil78.mongodb.net:27017/irie_blog?ssl=true&replicaSet=atlas-pl0pps-shard-0&authSource=admin&retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
