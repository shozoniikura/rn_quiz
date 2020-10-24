import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from '../components/common';
import {Card, Input} from 'react-native-elements';

export default class QuizScreen extends Component{
  render() {
    return (
      <View style={commonStyles.main}>
        <Card>
          <Text>にゅうりょくしてください</Text>
          <Input>aaa</Input>
        </Card>
      </View>
    );
  }
}