import React from 'react';
import {
  StackNavigator, TabNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Profile from './screens/Profile';
import UserDetails from './screens/UserDetails';

export const SignedOut = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign In'
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Up'
      }
    }
  },
  {
    headerMode: 'none'
  }
);

export const HomeRouter = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null
      }
    },
    UserDetails: {
      screen: UserDetails,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.name}'s details`
      })
    }
  }
);

export const SignedIn = TabNavigator(
  {
    Home: {
      screen: HomeRouter,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='home' style={{fontSize: 35, color: tintColor}} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='people' style={{fontSize: 35, color: tintColor}} />
        )
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
