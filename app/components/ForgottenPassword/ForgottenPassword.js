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
        <Text style={styles.emailHeading}>{emailHeading}</Text>
        <Text style={styles.emailText}>{emailText}</Text>
        <TextInput
          style={styles.email}
          placeholder=""
          onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.emailButton}>
          <Text>Send</Text>
        </View>
      </Image>
    );
  }
}
const emailHeading = "Your Email";
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
  emailHeading: {
    color: 'white',
    fontSize: 40,
    textShadowColor: 'black',
    textShadowRadius: 1,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  emailText: {
    color: 'white',
    margin: 15
  },
  emailButton: {
    margin: 10,
    height: 36,
    backgroundColor: '#f92525',
    borderColor: '#f92525',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    width: 80,
    justifyContent: 'center'
  }
});
