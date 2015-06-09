postsNew = ReactMeteor.createClass({
	
	templateName: 'posts',

	startMeteorSubscriptions() {
		Meteor.subscribe('posts');
	},

	render() {
		const { Grid, Row, Col } = ReactBootstrap;

		return 	<Grid>
							<Row>
								<Col md={6} mdOffset={3}>
									<h2> Novo Post </h2>
									<NewPost />
								</Col>
							</Row>
						</Grid>
	}

});