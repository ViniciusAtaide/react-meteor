var Blog = ReactMeteor.createClass({

	templateName: 'Blog',

	startMeteorSubscriptions() {
		Meteor.subscribe('users');
	},

	getMeteorState() {
		return {
			users: Users.find().fetch()
		};
	},

	_addUser(e) {
		e.preventDefault();

		var newUser = this.refs.newUser.getDOMNode();
		Meteor.call('addUser', newUser.value);

		newUser.value = "";

	},

	_removeUser(id) {
		Meteor.call('removeUser', id);
	},

	_changeName(id, newName) {
		Meteor.call('updateUser', id, newName);
	},

	_renderUser(model, i) {
		return 	<li key={ model._id }> 
							<InputSpan model={ model.name } onChange={this._changeName.bind(this, model._id, model.name)}/>
							<button onClick={ this._removeUser.bind(this, model._id) }>x</button>
						</li> 
	},

	render() {


		var { users } = this.state;

		var userlist = users.map(this._renderUser);

		return 	<div> 
							Teste
							<ul>
								{ userlist }
							</ul>
							<form onSubmit={this._addUser}>
								<input type="text" ref="newUser" />
								<input type="submit" value="Add User" />
							</form>
						</div>;
	}


});


var InputSpan = React.createClass({

	getInitialState() {
		return {
			isSelected: false
		};
	},

	_select() {

		this.setState({isSelected: true});

	},

	_onKeyUp(e) {

		if (e.keyCode === 13) {
			console.log('enter');
		} 
		return;
	},


	render() {
		var isSelected = this.state.isSelected;

		return isSelected ?
			<input type='text' value={this.props.model} onKeyUp={ this.props.onChange } />
		:
			<span onClick={this._select}> { this.props.model } </span>

	}

});