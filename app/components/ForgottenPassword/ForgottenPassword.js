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

import { Actions } from 'react-native-router-flux';

export default class ForgottenPassword extends Component {
  render() {
    return (
      <Image source={require('../../../app/images/ForgottenPassword.png')} style={styles.bgImage}>
        <Text style={styles.heading}>{emailHeading}</Text>
        <Text style={styles.text}>{emailText}</Text>
        <TextInput
          style={styles.email}
          placeholder=""
          onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.button}>
          <Image source={require('../../../app/images/Button.png')} style={styles.buttonBg}><Text style={styles.buttonText}>Send</Text></Image>
        </View>
      </Image>
    );
  }
}
const emailHeading = "Your E-mail";
const emailText = "If you have signed up for an account with your e-mail and forgotten your username or password, please type in your e-mail and we'll send you further instructions";

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
  },
  email: {
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      marginLeft: 15,
      marginRight: 15,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    textShadowColor: 'black',
    textShadowRadius: 1,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  text: {
    color: 'white',
    margin: 15
  },
  button: {
    margin: 10,
    height: 36,
    backgroundColor:'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 15,
    width: 80,
    justifyContent: 'center',

  },
  buttonText: {
    color: 'white',
  },
  buttonBg: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
