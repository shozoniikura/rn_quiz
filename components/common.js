import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizCorrect: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
  }
});

export default commonStyles;
