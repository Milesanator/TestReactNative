import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Row from './Row.js'

export default class Settings extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Profile']),
    };
  }

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Row {rowData}/>}
      />
    );
  }
}



const styles = StyleSheet.create({
  list: {
    paddingTop: 50,
  },
});
