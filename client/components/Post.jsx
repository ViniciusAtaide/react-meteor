Post = React.createClass({

	getInitialState() {
		return { 
			hovered: false
		}
	},

	_hover() {
		this.setState({ hovered: true });
	},

	_unhover() {
		this.setState({ hovered: false });
	},

	_removePost(id) {
		Meteor.call('removePost', id);
	},


	render() {	
		const { Button } = ReactBootstrap;
		const { model } = this.props;
		var { hovered } = this.state;
		var user = Meteor.users.findOne(model.user);
		console.log(user);

		const style = {
			hover: {
				background: hovered && Meteor.user() ? '#e7e7e7' : 'white',
				position: 'relative',
				padding: '50px 0'
			},
			remove: {
				display: hovered && Meteor.user() ? 'block' : 'none',
				position: 'absolute',
				top: 0,
				right: 0,
				width: 30,
				height: 30,
				background: 'gray',
				borderRadius: '0 0 0 10px',
				border: 0,
				color: 'white'
			}

		};

		return 	<li style={style.hover} onMouseLeave={this._unhover} onMouseEnter={this._hover}> 
							<button style={style.remove} onMouseEnter={ this._hoverX } onClick={this._removePost.bind(this, model._id) }>x</button>
							<InputSpan type='title' field='title' value={ model.title } id={ model._id } />
							<InputSpan type='paragraph' field='body' value={ model.body } id={ model._id } />
							<span className='pull-right'>Escrito por: { user.emails[0].address} </span>
						</li> 
	}		

});