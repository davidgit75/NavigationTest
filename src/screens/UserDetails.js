import React, { Component } from 'react';
import {
  Container, Content, Text
} from 'native-base';

class UserDetails extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Text> UserDetails Screen </Text>
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

export default UserDetails;
