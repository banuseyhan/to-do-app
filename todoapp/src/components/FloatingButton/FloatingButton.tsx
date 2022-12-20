import React from 'react';
import {View, Text} from 'react-native';
//styles
import styles from '../FloatingButton/FloatingButton.style';
const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}> + </Text>
    </View>
  );
};

export default FloatingButton;
