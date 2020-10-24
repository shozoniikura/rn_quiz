import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from '../components/common';

export default class Main extends Component {
  render() {
    return (
      <View style={commonStyles.main}>
        <Text>MainScreen</Text>
      </View>
    )
  }
}