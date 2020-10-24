import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createBottomTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import MainScreen from './screens/MainScreen';
import QuizScreen from './screens/QuizScreen';

import store from './modules/store';

// (1) StackNavigatorを生成する
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* (2) StackNavigator用の画面を定義する */}
        <Stack.Screen 
          name="Main"
          component={MainScreen}
          options={{title: "ホーム"}}
          />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{title: "クイズ"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
