var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String, // hash created from password
	created_at: {type: Date, default: Date.now}
});

var postSchema = new mongoose.Schema({
	created_by: String,
	created_at: {type: Date, default: Date.now},
	text: String
});

mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);

var User = mongoose.model('User');
exports.findByUsername = function(userName, callback) {
	User.findOne({user_name: userName}, function(err, user) {
		if(err) {
			return callback(err);
		}
		return callback(null, user);
	});
}

exports.findById = function(id, callback) {
	User.findById(id, function(err, user) {
		if(err) {
			return callback(err);
		}
		return callback(null, user);
	})
}