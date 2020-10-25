import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import MainScreen from './screens/MainScreen';
import QuizScreen from './screens/QuizScreen';

// 全体の値を保管するストア
import storeRoot from './modules/store';

// (1) StackNavigatorを生成する
const Stack = createStackNavigator();

export default function App() {
  storeRoot();
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
