Meteor.publish('users', function() {
	return Meteor.users.find();
});

Meteor.publish('posts', function() {
	return Posts.find({$or: [{ user: this.userId }, { public: true}]});
});


Meteor.methods({

	addPost: function (title, body, public) {
		Posts.insert({title: title, public: public, body: body, user: this.userId, createdAt: new Date(), updatedAt: new Date() });
	},
	removePost: function (id) {
		
		Posts.remove(id);
	},
	updatePost: function (id, field, value) {
		console.log(id, field, value);

		field === 'title' ? 
			Posts.update(id, {$set: {title: value, updatedAt: new Date() }})
		:
			Posts.update(id, {$set: {body: value, updatedAt: new Date() }})
		
	}

});