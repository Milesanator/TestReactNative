/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import TheHeart from './app/components/TheHeart/TheHeart.js';
import Login from './app/components/Login/Login.js';
import EmailSignup from './app/components/EmailSignup/EmailSignup.js';
import ForgottenPassword from './app/components/ForgottenPassword/ForgottenPassword.js';
import Settings from './app/components/Settings/Settings.js';
import MessageList from './app/components/MessageList/MessageList.js';
import Home from './app/components/Home/Home.js';

import {Scene, Router} from 'react-native-router-flux';

class TestReactNative extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title=""/>
        <Scene key="login" component={Login} title=""/>
        <Scene key="the_heart" component={TheHeart} title=""/>
        <Scene key="email_signup" component={EmailSignup} title=""/>
        <Scene key="forgotten_password" component={ForgottenPassword} title=""/>
        <Scene key="settings" component={Settings} title="Settings"/>
        <Scene key="message_list" component={MessageList} title=""/>
      </Scene>
    </Router>
  }
}



AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
