import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class TheHeart extends Component {
  render() {
    return (
      <Image source={require('../../../app/images/TheHeart-1.png')} style={styles.bgImage}>
      <View style={styles.messageListButton}>
        <Text onPress={Actions.message_list}>chat</Text>
      </View>

      <View style={styles.settingsButton}>
        <Text onPress={Actions.settings}>settings</Text>
      </View>
      </Image>
    );
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
    bottom: 0,
    left: 0,
  },
  settingsButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
});
