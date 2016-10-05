import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Navigator,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

import { Actions } from 'react-native-router-flux';

var t = require('tcomb-form-native');

var Form = t.form.Form;

var STORAGE_KEY = 'id_token';

var User = t.struct({
  email: t.String,
  password: t.String
});

const options = {
  auto: 'placeholders',
};

var EmailSignup = React.createClass({
  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  },
  render() {
    return (
      <Image source={require('../../../app/images/ForgottenPassword.png')} style={styles.bgImage}>
        <View style={styles.formWrapper}>
          <Text style={styles.heading}>Sign up!</Text>
          <Form
            ref="form"
            type={User}
            options={options}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={this._userSignup} underlayColor='#99d9f4'>
          <View style={styles.button}>
            <Image source={require('../../../app/images/Button.png')} style={styles.buttonBg}><Text style={styles.buttonText}>Sign up</Text></Image>
          </View>
        </TouchableHighlight>
      </Image>
    );
  },
  _userSignup() {
    var value = this.refs.form.getValue();
    console.log(value.email);
    console.log(value.password);
    if (value) { // if validation fails, value will be null
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.email,
          password: value.password,
          extra: 'location'
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        this._onValueChange(STORAGE_KEY, responseData.id_token),
        AlertIOS.alert(
          "Signup Success!"
        )
        Actions.pop();
      })
      .done();
    }
  },
});

export default EmailSignup;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    color: 'white',
    marginBottom: 40,
    marginLeft: 8,
  },
  button: {
    height: 36,
    backgroundColor:'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 8,
    width: 80,
    justifyContent: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 15
  },
  buttonBg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formWrapper: {
    justifyContent: 'center',
    width: 250,
    marginLeft: 15,
  }
});
