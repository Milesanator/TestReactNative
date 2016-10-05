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
import Icon from '../../../node_modules/react-native-vector-icons/FontAwesome';
import FacebookLogin from '../FacebookLogin/FacebookLogin.js';

var t = require('tcomb-form-native');

var Form = t.form.Form;

var STORAGE_KEY = 'id_token';

var User = t.struct({
  username: t.String,
  password: t.String
});

const options = {
  auto: 'placeholders',
};

var Login = React.createClass({
  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  },

  render() {
    return (
      <Image source={require('../../../app/images/LoginScreen.png')} style={styles.bgImage}>
        <View style={styles.formWrapper}>
        <Form
          ref="form"
          type={User}
          options={options}
        />
        </View>
        <TouchableHighlight style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
          <View style={styles.button}>
            <Image source={require('../../../app/images/Button.png')} style={styles.buttonBg}><Text style={styles.buttonText}>Sign up</Text></Image>
          </View>
        </TouchableHighlight>
        <FacebookLogin/>
        <View style={{margin: 10}}>
          <Text onPress={Actions.email_signup}>Sign up with Email</Text>
        </View>
        <View style={styles.forgottenPasswordButton}>
          <Text onPress={Actions.forgotten_password}>Forgot username or password?</Text>
        </View>
      </Image>
    );
  },
  _userLogin() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      fetch("http://localhost:3001/sessions/create", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.username,
          password: value.password
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        AlertIOS.alert(
          "Login Success!",
        ),
        this._onValueChange(STORAGE_KEY, responseData.id_token)
        // TODO: validate STORAGE_KEY and force the_heart on load of Login
        Actions.the_heart();
      })
      .done();
    }
  },
  async _userLogout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      AlertIOS.alert("Logout Success!")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
});

export default Login;

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
      borderColor: 'white',
      borderWidth: 1,
  },
  password: {
      textAlign: 'center',
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
  },
  userIcon: {

  },
  passwordIcon: {

  },
  button: {
    height: 36,
    backgroundColor:'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 5,
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
  forgottenPasswordButton: {
    position: 'absolute',
    bottom: 10,
    right: 90,
  },
  formWrapper: {
    justifyContent: 'center',
    width: 250,
  }
});
