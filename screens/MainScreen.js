import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import commonStyles from '../components/common';
import {useNavigation} from '@react-navigation/native';

import storeRoot, {store, clearStore, setStore} from '../modules/store';
import questions from '../modules/questions';

let score, setScore;

// export default class MainScreen extends Component {
export default function MainScreen() {
  [score, setScore] = React.useState(store.score);
  const {navigate} = useNavigation();
  return (
    <View style={commonStyles.main}>
      <Text>MainScreen</Text>
      <Button color="red" title="Quiz開始！" 
        onPress={() => {setScore(null); navigate('Quiz')}} />
      <View>
        { score === null ?
          <Text></Text> :
          <Text>Score: {score}</Text>
        }
        <Button onPress={onPressButton} title="スコア表示" />
        <Button onPress={handleClearButton} title="クリア" />
      </View>
    </View>
  );
}

function onPressButton() {
  console.log(store)
  if (store.count === undefined)
    store.count = 0;
  store.count += 1;
  calcScore();
}

function handleClearButton() {
  clearStore();
  setScore(null);
}

function calcScore() {
  let correct = 0;
  let newScore = 0;
  if (Object.keys(store.checked).length === 0)
    return;

  questions().forEach(q => {
    if(q.correctAnswer === store.checked[q.title]) {
      correct += 1;
    }
  });
  newScore = parseInt(100 * (correct / questions().length));
  store.score = newScore;
  setScore(newScore);
}