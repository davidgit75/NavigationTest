import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  createRootNavigator
} from './router';

import { isSignedIn } from './auth';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => Alert.alert('Error', err));
  }

  render() {
    const { signedIn, checkedSignIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
