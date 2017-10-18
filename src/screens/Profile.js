import React, { Component } from 'react';
import {
  Container, Content, Text, Button,
  Header, Body, Left, Right
} from 'native-base';

import { onSignOut } from '../auth';

class Profile extends Component {
  async logOut() {
    await onSignOut();
    this.props.navigation.navigate('SignIn');
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
          <Text> Profile Screen </Text>
        </Content>
      </Container>
    );
  }
}

const styles = {
  content: {
    margin: 40
  }
};

export default Profile;
