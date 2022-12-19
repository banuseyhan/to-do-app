import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from './src/styles/Color';
import Fonts from './src/styles/Fonts';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To Do list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultDeepBlueColor,
    flex:1 ,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 25,
  },
});
export default App;
