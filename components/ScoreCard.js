import React from 'react';
import { Text, View, FlatList } from 'react-native';
import commonStyles from '../components/common';
import { Card } from 'react-native-elements';

import { store, scoreIsAvailable } from '../modules/store';

export default function ScoreCard(props) {
  return (
    <Card>
      <Text>成績</Text>
      <Text></Text>
      <Text>Score: {props.score}</Text>
      <Text>Correct: {props.correct}</Text>
      <Text>Questions: {props.questions.length}</Text>
    </Card>
  );
}