import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import commonStyles from '../components/common';
import {useNavigation} from '@react-navigation/native';

// export default class MainScreen extends Component {
export default function MainScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={commonStyles.main}>
      <Text>MainScreen</Text>
      <Button color="red" title="Quiz開始！" 
        onPress={() => navigate('Quiz')} />
    </View>
  );
}