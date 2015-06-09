Blog = ReactMeteor.createClass({

	templateName: 'Blog',

	startMeteorSubscriptions() {
		Meteor.subscribe('posts');
	},

	getMeteorState() {
		return {
			posts: Posts.find().fetch()
		};
	},

	render() {

		var { posts } = this.state;
		const { Row, Col, Grid } = ReactBootstrap;


		return 	<Grid> 
							<Row>
								<Col md={6} mdOffset={3}> 
									<h2>Blog</h2>
									<ul>
										{ posts.map((post) => { return <Post key={post._id} model={post} /> }) }
									</ul>
								</Col>
							</Row>
						</Grid>;
	}


});


