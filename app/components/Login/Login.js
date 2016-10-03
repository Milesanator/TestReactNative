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
import Icon from '../../../node_modules/react-native-vector-icons/FontAwesome';
// <Icon name="ei-user" size={30} color="#900" style={styles.userIcon}/>
// <Icon name="ei-lock" size={30} color="#900" style={styles.passwordIcon}/>

export default class Login extends Component {
  render() {
    return (
      <Image source={require('../../../app/images/LoginScreen.png')} style={styles.bgImage}>
        <TextInput
          style={styles.username}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
          secureTextEntry={true}
        />
        <View style={{margin: 10}}>
          <Text onPress={Actions.the_heart}>Login(temp)!</Text>
        </View>
        <View style={{margin: 10}}>
          <Text onPress={Actions.email_signup}>Sign up with Email</Text>
        </View>
        <View style={{margin: 10}}>
          <Text onPress={Actions.forgotten_password}>Forgot username or password?</Text>
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
});
