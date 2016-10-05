import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Store from 'react-native-simple-store';
import TheHeart from '../TheHeart/TheHeart.js';
import Login from '../Login/Login.js';

// export default class Home extends Component {
var Home = React.createClass({
  componentDidMount: function() {
    Store.get('user').then((user)=> {
      if(this._isUserValid(user)) {
        Actions.the_heart();
      } else {
        Actions.login();
      }
    })
  },

  render() {
      return null;
  },
  _isUserValid(user) {
    if(user==null){
      return false;
    }
    if(user.authToken != null) {
      return true;
    }
  }
});
export default Home;
