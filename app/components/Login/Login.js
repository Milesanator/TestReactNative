import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Navigator,
  View,
  TouchableHighlight
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

const options = {};

export default class Login extends Component {
  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <Image source={require('../../../app/images/LoginScreen.png')} style={styles.bgImage}>
        <Form
          ref="form"
          type={User}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login</Text>
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
  }
  onPress() {
      // call getValue() to get the values of the form
      var value = this.refs.form.getValue();
      if (value) { // if validation fails, value will be null
        console.log(value); // value here is an instance of Person
      }
  }
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
          password: value.password,
          // add location
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        AlertIOS.alert(
          "Login Success!",

        ),
        this._onValueChange(STORAGE_KEY, responseData.id_token)
      })
      .done();
    }
  }
  async _userLogout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      AlertIOS.alert("Logout Success!")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  _userSignup() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.username,
          password: value.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        this._onValueChange(STORAGE_KEY, responseData.id_token),
        AlertIOS.alert(
          "Signup Success!",
          "Click the button to get a Chuck Norris quote!"
        )
      })
      .done();
    }
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#f92525',
    borderColor: '#f92525',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    width: 80,
    justifyContent: 'center'
  },
  forgottenPasswordButton: {
    position: 'absolute',
    bottom: 10,
    right: 90,
  }
});
