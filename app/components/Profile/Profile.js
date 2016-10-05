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

export default class Profile extends Component {
  render() {
    return (
      <Image source={require('../../../app/images/Profile.png')} style={styles.bgImage}>

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
});
