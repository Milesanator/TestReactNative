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
      <View style={styles.wrapper}>
      <Image source={require('./app/images/LoginScreen.png')} style={styles.container}/>
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
        <Navigator
          style={styles.loginButton}
          initialRoute={{ title: 'LoginScreen', index: 0 }}
          renderScene={(route, navigator) => {
            return <TheHeart title={route.title} />
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch',
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
