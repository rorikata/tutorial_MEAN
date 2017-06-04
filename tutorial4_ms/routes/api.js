var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

function isAuthenticated(req, res, next) {
	if(req.method === "GET") {
		return next();
	}
	if(req.isAuthenticated()) {
		return next();
	}
	return res.redirect('/#login');
};

router.use('/posts', isAuthenticated);

//api for all posts
router.route('/posts')
	//create a new post
	.post(function(req, res) {
		// TODO create a new post in the database
			var post = new Post();
			post.text = req.body.text;
			post.created_by = req.body.created_by;
			post.save(function(err, post) {
				if(err) {
					return res.send(500, err);
				}
				return res.json(post);
			});
	})

	.get(function(req, res) {
		//TODO get all the posts in the database
		Post.find(function(err, posts) {
			if(err) {
				return res.send(500, err);
			}
			return res.send(posts);
		});
	});

//api for a specific post
router.route('/posts/:id')
	// create
	.put(function(req, res) {
		Post.findById(req.params.id, function(err, post) {
			if(err) {
				res.send(err);
			}
			post.created_by = req.body.created_by;
			post.text = req.body.text;
			post.save(function(err, post) {
				if(err) {
					res.send(err);
				}
				res.json(post);
			});
		});
	})

	.get(function(req, res) {
		Post.findById(req.params.id, function(err, post) {
			if(err) {
				res.send(err);
			}
			res.json(post);
		})
	})

	.delete(function(req, res) {
		Post.remove({
			_id: req.params.id
		}, function(err) {
			if(err) {
				res.send(err);
			}
			res.json("deleted :(" );
		});
	});


module.exports = router;