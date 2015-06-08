Meteor.publish('users', function() {
	return Users.find();
});


Meteor.methods({

	addUser: function (name) {
		Users.insert({name: name});
	},
	removeUser: function (id) {
		Users.remove(id);
	},
	updateUser: function (id, newName) {
		Users.update(id, {$set: {name: newName}});
	}

});