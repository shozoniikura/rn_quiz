import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from '../components/common';
import {Card, Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default function QuizScreen() {
  return (
    <View style={commonStyles.main}>
      <Card>
        <Text>にゅうりょくしてください</Text>
        <Input>aaa</Input>
      </Card>
    </View>
  );
}