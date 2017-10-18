import React, { Component } from 'react';
import {
	Container, Header, Content,
	Form, Item, Input, Text, Button
} from 'native-base';

class SignUp extends Component {
	goToSignIn() {
		this.props.navigation.navigate('SignIn');
	}

	render() {
		return (
			<Container style={styles.container}>
				<Content contentContainerStyle={styles.content}>
					<Form>
						<Item>
							<Input placeholder='Username' />
						</Item>
						
						<Item>
							<Input placeholder='Password' />
						</Item>

						<Button style={styles.button}>
							<Text style={styles.textButton}>SignUp</Text>
						</Button>

						<Button
							style={styles.button}
							warning
							onPress={() => this.goToSignIn()}
						>
							<Text style={styles.textButton}>SignIn</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}

const styles = {
	container: {
		marginLeft: 20,
		marginRight: 20,
		flex: 1
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		minWidth: '100%'
	},
	button: {
		marginTop: 20,
		marginLeft: 15,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		width: '94%'
	},
	textButton: {
		textAlign: 'center'
	}
};

export default SignUp;
