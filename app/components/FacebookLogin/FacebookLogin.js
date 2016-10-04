import React, { Component } from 'react';

import {
  LoginButton,
} from 'react-native-fbsdk';

import {
  AppRegistry,
  StyleSheet,
  AccessToken,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class FacebookLogin extends Component {
  render() {
    return (
    <View>
    <LoginButton
      style={styles.facebookButton}
      publishPermissions={["publish_actions"]}
      onLoginFinished={
        (error, result) => {
          if (error) {
            alert("Login failed with error: " + result.error);
          } else if (result.isCancelled) {
            alert("Login was cancelled");
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                alert(data.accessToken.toString())
              }
            )
          }
        }
      }
      onLogoutFinished={() => alert("User logged out")}/>
    </View>
  );
  }
}



const styles = StyleSheet.create({
  facebookButton: {
    backgroundColor: 'blue',
    height: 40,
    width: 200
  }
});
