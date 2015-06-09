NewPost = React.createClass({

	_addPost(e) {
		
		e.preventDefault();

		var newPost = this.refs.newPost.getInputDOMNode();
		var newPostBody = this.refs.newPostBody.getInputDOMNode();
		var newPostPublic = this.refs.public.getInputDOMNode();

		Meteor.call('addPost', newPost.value, newPostBody.value, newPostPublic.checked);

		newPost.value = "";
		newPostBody.value = "";
		newPostPublic.checked = false;

		Router.go('Blog');

	},

	render() {

		const { Input } = ReactBootstrap;

		return <form onSubmit={ this._addPost }>
							<Input type="text" ref="newPost" placeholder="Titulo" />
							<Input type="textarea" ref="newPostBody" placeholder="Corpo" /> 
							<Input block type="checkbox" ref="public" label="Publico?" />
							<Input bsStyle='success' type="submit" block value="Criar Post" />
					 </form>
	}
});