var Body = React.createClass({
	propTypes: {
		collections: React.PropTypes.objectOf(
			React.PropTypes.instanceOf(Mongo.Collection)
		).isRequired,
		where: React.PropTypes.string.isRequired
	},

	render: function () {
		return <div className='app'>
			<h3> Rendered on the { this.props.where }</h3>
			<div className='outer'>
				<div className='logo'></div>
				<h1 className='title'> Blog </h1>
				<Blog collections={collections} />
			</div>
		</div>
	}
})