import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import commonStyles from '../components/common';
import {Card, Input} from 'react-native-elements';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Quiz from '../components/Quiz';

const Tab = createMaterialTopTabNavigator();

// https://www.itpassportsiken.com/ipkakomon.php より
const questions = function(){
  return [
    {
      title: 'Q1',
      description: 'ERPパッケージの特徴として適切なものはどれか。',
      choices: [
        {title: '業界独特の業務を統合的に支援するシステムなので，携帯電話事業などの一部の業種に限って利用されている。'},
        {title: '財務会計業務に限定したシステムであるので，一般会計処理に会計データを引き渡すまでの機能は，別途開発又は購入する必要がある。'},
        {title: '種々の業務関連アプリケーションを処理する統合業務システムであり，様々な業種及び規模の企業で利用されている。'},
        {title: '販売，仕入，財務会計処理を統合したシステムであり，個人商店などの小規模企業での利用に特化したシステムである。'},
      ],
      correctAnswer: 2,
    },
    {
      title: 'Q2',
      description: '内部統制を機能させるための方策として，適切なものはどれか。',
      choices: [
        {title: '業務範囲や役割分担を示す職務記述書を作成しない。'},
        {title: '後任者への引継ぎ書を作成しない。'},
        {title: '購買と支払の業務を同一人に担当させない。'},
        {title: 'システム開発と運用の担当を分離しない。'},
      ],
      correctAnswer: 2,
    },
  ];
}

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