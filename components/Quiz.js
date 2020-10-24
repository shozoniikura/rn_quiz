import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import commonStyles from '../components/common';
import {Card, Input} from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

export default function Quiz(props) {
  const q = props.route.params;
  const [checked, setChecked] = React.useState();
  return (
    <View>
      <Card>
        <Text>{q.title}</Text>
        <Text>{q.description}</Text>
        <FlatList
          data={q.choices}
          keyExtractor={item => item.title}
          renderItem={({item, index}) => (
              <View style={quizStyle(q,index)}>
                <RadioButton value={index}
                  status={ checked === index ? 'checked' : 'unchecked' }
                  onPress={() => setChecked(index)}
                  />
                <Text>{item.title}</Text>
              </View>
            )
          }
        />

      </Card>
    </View>
  );
}

function quizStyle(q, index) {
  if (q.correctAnswer === index) {
    return commonStyles.quizCorrect;
  } else {
    return null;
  }
}