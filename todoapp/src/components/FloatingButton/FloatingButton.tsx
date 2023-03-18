import React, {FC} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
//styles
import styles from '../FloatingButton/FloatingButton.style';

interface IButtonProps {
  onPress: () => void;
}
const FloatingButton = ({onPress}: IButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.icon}> + </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FloatingButton;
