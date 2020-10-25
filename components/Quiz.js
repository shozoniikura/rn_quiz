import React from 'react';
import { Text, View, FlatList } from 'react-native';
import commonStyles from '../components/common';
import { Card } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

import { store } from '../modules/store';
import { calcScore } from '../screens/MainScreen';

export default function Quiz(props) {
  const q = props.route.params;
  const [checked, setChecked] = React.useState(store.checked[q.title]);
  const [correct, setCorrect] = React.useState(store.correct[q.title]);
  return (
    <View>
      <Card>
        <Text>{q.title}</Text>
        <Text>{q.description}</Text>
        <FlatList
          data={q.choices}
          keyExtractor={item => item.title}
          renderItem={({item, index}) => (
              <View style={quizStyle(q,index,checked)}>
                <RadioButton value={index}
                  status={ checked === index ? 'checked' : 'unchecked' }
                  onPress={() => handleCheck(q, index, setChecked, setCorrect)}
                  />
                <Text>{item.title}</Text>
              </View>
            )
          }
        />

      </Card>
      <Card>
        <Text>{status(correct)}</Text>
      </Card>
    </View>
  );
}

function quizStyle(q, index, checked) {
  if (checked !== undefined && q.correctAnswer === index) {
    return commonStyles.quizCorrect;
  } else {
    return null;
  }
}

function status(correct) {
  if (correct !== undefined) {
    if (correct) {
      return "正解";
    } else {
      return "不正解";
    }
  }
}

function handleCheck(q, index, setChecked, setCorrect) {
  // 選択肢を保存する
  setChecked(index);
  store.checked[q.title] = index;
  // 正解・不正解を保存する
  const correct = (q.correctAnswer === index);
  setCorrect(correct);
  store.correct[q.title] = correct;
  // スコアを計算する
  calcScore();
}
