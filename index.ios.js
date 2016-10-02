/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Navigator,
  View
} from 'react-native';

import TheHeart from './app/components/TheHeart/TheHeart.js';

class TestReactNative extends Component {
  render() {
    return (
      <Image source={require('./app/images/LoginScreen.png')} style={styles.bgImage}>
        <TextInput
          style={styles.username}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
          secureTextEntry={true}
        />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
      textAlign: 'center',
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,
  },
  password: {
      textAlign: 'center',
      height: 40,
      borderColor: 'grey',
      borderWidth: 1,
  },
  loginButton: {


  },
});

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
