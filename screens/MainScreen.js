import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import commonStyles from '../components/common';
import {useNavigation} from '@react-navigation/native';

import {store, clearStore, scoreIsAvailable, corrects} from '../modules/store';
import questions from '../modules/questions';
import ScoreCard from '../components/ScoreCard';

let score, setScore;

export default function MainScreen() {
  [score, setScore] = React.useState(store.score);
  const {navigate} = useNavigation();
  return (
    <View style={commonStyles.main}>
      <View style={commonStyles.main}>
        <Text>画面とステートの制御の練習</Text>
      </View>
      <View style={commonStyles.main2}>
      <Button color="red" title="Quiz開始！" 
        onPress={() => {setScore(null); navigate('Quiz')}} />
      <View>
        { scoreIsAvailable(score) ?
          <View>
            <ScoreCard score={score} correct={corrects()} questions={questions()} />
            <Button onPress={handleClearButton} title="クリア" />
          </View> :
          <View />
        }
      </View>
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

export function calcScore() {
  if (Object.keys(store.checked).length === 0) return;

  let correct = corrects();
  let newScore = parseInt(100 * (correct / questions().length));
  store.score = newScore;
  setScore(newScore);
}