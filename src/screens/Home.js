import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container, Content, Text,
  Button, Spinner,
  Card, CardItem,
  Header, Body, Right, Left
} from 'native-base';

import { NavigationActions } from 'react-navigation';

import { onSignOut } from '../auth';
import { getUsers } from '../api';

class Home extends Component {
  constructor(props) {
		super(props);
		this.state = {
			users: [],
      error: null
		};
	}

	componentWillMount() {
		getUsers(
			d => this.setState({ users: d }),
			e => this.setState({ error: e })
		);
	}

  async logOut() {
    await onSignOut();
    this.props.navigation.navigate('SignIn');
  }

  renderUsers() {
    if (this.state.users.length === 0 && this.state.error === null) {
      return <Spinner />;
    } else if (this.state.error !== null) {
      return <Text>Error: {JSON.stringify(this.state.error)}</Text>;
    }
    const Users = this.state.users.map((user, index) => (
      <Card key={user.id}>
        <CardItem header>
          <Text>{user.name}</Text>
        </CardItem>

        <CardItem>
          <Text>{user.email}</Text>
        </CardItem>

        <CardItem
          footer
          button
          onPress={() => {
            this.props.navigation.navigate('UserDetails', { name: user.name })
          }}
        >
          <Text>Details</Text>
          <Text>{this.state.text}</Text>
        </CardItem>
      </Card>
    ));

    // return <Text>{JSON.stringify(this.state.users)}</Text>;
    return Users;
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Text>Home</Text>
          </Body>

          <Right>
            <Button transparent onPress={() => this.logOut()}>
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.content}>
          {this.renderUsers()}
        </Content>
      </Container>
    );
  }
}

const styles = {
  content: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  }
};

export default Home;
