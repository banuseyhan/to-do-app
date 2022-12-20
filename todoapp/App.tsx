import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from './src/styles/Color';
import Fonts from './src/styles/Fonts';
import FloatingButton from './src/components/FloatingButton';
import AddTaskModal from './src/components/AddTaskModal/AddTaskModal';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To Do List</Text>
      <FloatingButton></FloatingButton>
      <AddTaskModal></AddTaskModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultDeepBlueColor,
    flex: 1,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
    left: 20,
  },
});
export default App;
