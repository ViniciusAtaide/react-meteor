Router.map(function () {
	this.route('Blog', { path: '/' });
	this.route('posts/:id');
	this.route('posts');
});