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
  View
} from 'react-native';

class TestReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          CONNECTR
        </Text>
        <TextInput
          style={{styles.username}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{styles.password}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  username {
      textAlign: 'center',
      margin: 10,
      borderColor: 'grey',
      borderWidth: 1,
  },
  password {
      textAlign: 'center',
      margin: 10,
      borderColor: 'grey',
      borderWidth: 1,
  },
});

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
