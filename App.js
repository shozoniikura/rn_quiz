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

// (1) StackNavigatorを生成する
const Stack = createStackNavigator();

export default function App() {
  // //AppContainerでラップ
  // const Layout = createAppContainer(Stack);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* (2) StackNavigator用の画面を定義する */}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <MainScreen />
      <QuizScreen />
    </View>
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
