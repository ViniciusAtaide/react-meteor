InputSpan = React.createClass({

	getInitialState() {
		return {
			isSelected: false,
			focus: false
		};
	},

	_select() {
		this.setState({isSelected: true});
	},

	_unselect() {
		this.state.focus ? null : this.setState({isSelected: false});
	},

	_onKeyUp(e) {
		if (e.keyCode === 13) this.setState({ isSelected: false });
	},

	_onChange(id, field, e) {
		Meteor.call('updatePost', id, field, e.target.value);
	},

	_onBlur() {
		this.setState({ isSelected: !this.state.isSelected });
	},

	_onFocus() {
		this.setState({ focus: !this.state.focus });
	},


	render() {

		var { isSelected, focus } = this.state;
		const { Input, Button, Well } = ReactBootstrap;
		const { field, id, value, type } = this.props;
	  const style = {
			li: {
				display: 'block',
				borderRadius: 5,
				margin: 2
			}
		}


		var result = isSelected && Meteor.user() ? 
			<Input type='text' onBlur={ this._onBlur } onFocus={this._onFocus} onMouseOut={this._unselect} onChange={ this._onChange.bind(this, id, field) } value={ value } onKeyUp={ this._onKeyUp } />
		:
			type === 'paragraph' ? 
				<p style={style.li} onMouseEnter={this._select}> <span> { value } </span> </p>
			:
				<h3 style={style.li} onMouseEnter={this._select}> <span> { value } </span> </h3>

		return <div style={{ marginTop: 20}}>{result}</div>;


	}

});