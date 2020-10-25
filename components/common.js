import {StyleSheet} from 'react-native';

const main = {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
};

const commonStyles = StyleSheet.create({
  main: main,
  main2: {
    ...main,
    flex: 2,
    justifyContent: 'flex-start',
  },
  quizCorrect: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
  }
});

export default commonStyles;
