import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from '../components/common';
import {Card, Input} from 'react-native-elements';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Quiz from '../components/Quiz';

const Tab = createMaterialTopTabNavigator();

function QuizTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Quiz-1" component={Quiz} />
      <Tab.Screen name="Quiz-2" component={Quiz} />
      <Tab.Screen name="Quiz-3" component={Quiz} />
    </Tab.Navigator>
  );
}

export default function QuizScreen() {
  return (
    <QuizTabs />
  );
}