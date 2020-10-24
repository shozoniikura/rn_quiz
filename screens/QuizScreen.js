import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import commonStyles from '../components/common';
import {Card, Input} from 'react-native-elements';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Quiz from '../components/Quiz';
import questions from '../modules/questions';

const Tab = createMaterialTopTabNavigator();

function QuizTabs() {
  return (
    <Tab.Navigator>
      {
        questions().map((q, idx) =>
            <Tab.Screen key={idx} name={`Quiz-${q.title}`} component={Quiz}
              initialParams={q} />
        )
      }
    </Tab.Navigator>
  );
}

export default function QuizScreen() {
  return (
    <QuizTabs />
  );
}