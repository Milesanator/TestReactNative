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
        <Text>{emailHeading}</Text>
        <Text>{emailText}</Text>
        <TextInput
          style={styles.email}
          placeholder=""
          onChangeText={(text) => this.setState({text})}
        />
        <View>
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
    alignItems: 'center',
  },
  email: {
      textAlign: 'center',
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
  },
});
