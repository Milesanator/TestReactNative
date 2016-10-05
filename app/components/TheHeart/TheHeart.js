import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Store from 'react-native-simple-store';
import Icon from '../../../node_modules/react-native-vector-icons/FontAwesome';

const chatIcon = (<Icon name="commenting" size={30} color="#808080" />);
const settingsIcon = (<Icon name="wrench" size={30} color="#808080" />)

export default class TheHeart extends Component {
  render() {
    return (
      <Image source={require('../../../app/images/TheHeart-1.png')} style={styles.bgImage}>
      <View style={styles.messageListButton}>
        <Text onPress={Actions.message_list}>{chatIcon}</Text>
      </View>
      <View style={styles.logoutButton}>
        <Text onPress={this._userLogout}>Logout</Text>
      </View>
      <View style={styles.settingsButton}>
        <Text onPress={Actions.settings}>{settingsIcon}</Text>
      </View>
      </Image>
    );
  }
  _userLogout () {
    Store.delete('user');
    Actions.home();
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
  messageListButton: {
    position:'absolute',
    bottom: 10,
    left: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 10,
    right: 160,
  },
  settingsButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
