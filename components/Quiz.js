import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from '../components/common';
import {Card, Input} from 'react-native-elements';

export default function Quiz(props) {
  const {params} = props.route;
  let title;
  if (params !== undefined)
    title = params.title;
  return (
    <View>
      <Card>
        <Text>{title}</Text>
        <Text>にゅうりょくしてください</Text>
        <Input>aaa</Input>
      </Card>
    </View>
  );
}