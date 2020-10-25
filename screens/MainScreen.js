import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import commonStyles from '../components/common';
import {useNavigation} from '@react-navigation/native';

import {store, clearStore} from '../modules/store';
import questions from '../modules/questions';

let score, setScore;

export default function MainScreen() {
  [score, setScore] = React.useState(null);
  const {navigate} = useNavigation();
  return (
    <View style={commonStyles.main}>
      <Text>MainScreen</Text>
      <Button color="red" title="Quiz開始！" 
        onPress={() => {setScore(null); navigate('Quiz')}} />
      <View>
        { score === null ?
          <Button onPress={onPressButton} title="スコア表示" /> :
          <Text>Score: {score}</Text>
        }
        <Button onPress={handleClearButton} title="クリア" />
      </View>
    </View>
  );
}

function onPressButton() {
  calcScore();
}

function handleClearButton() {
  clearStore();
  setScore(null);
}

function calcScore() {
  if (Object.keys(store.checked).length === 0) return;

  let correct = Object.values(store.correct).filter(v => v).length
  let newScore = parseInt(100 * (correct / questions().length));
  store.score = newScore;
  setScore(newScore);
}