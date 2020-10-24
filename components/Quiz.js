import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import commonStyles from '../components/common';
import {Card, Input} from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

import store from '../modules/store';
import questions from '../modules/questions';

export default function Quiz(props) {
  const q = props.route.params;
  const checkedStore = store().checked;
  const [checked, setChecked] = React.useState(checkedStore[q.title]);
  const [correct, setCorrect] = React.useState(undefined);
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
                  onPress={() => handleCheck(q,index, setChecked, setCorrect)}
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
  const checkedStore = store().checked;
  checkedStore[q.title] = index;
  setChecked(index);
  setCorrect(q.correctAnswer === index);
  // calcScore();
}

// function calcScore() {
//   let correct = 0;
//   let score = 0;
//   questions().forEach(q => {
//     if(q.correctAnswer === store().checked[q.title]) {
//       correct += 1;
//     }
//   });
//   score = parseInt(100 * (correct / questions().length));
//   store().score = score;
// }