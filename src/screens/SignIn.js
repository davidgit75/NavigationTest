import React, { Component } from 'react';
import {
	Container, Header, Content,
	Form, Item, Input, Text, Button,
	Card, CardItem, Body
} from 'native-base';

import { NavigationActions } from 'react-navigation';

import { onSignIn } from '../auth';

class SignIn extends Component {
	goToSignUp() {
		this.props.navigation.navigate('SignUp');
	}

	async signIn() {
		await onSignIn();
		this.props.navigation.navigate('Home');
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

						<Button
							style={styles.button}
							onPress={() => this.signIn()}
						>
							<Text style={styles.textButton}>Login</Text>
						</Button>

						<Button
							style={styles.button}
							warning
							onPress={() => this.goToSignUp()}
						>
							<Text style={styles.textButton}>SignUp</Text>
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

export default SignIn;
